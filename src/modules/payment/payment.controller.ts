import { Request, Response } from "express"

// ── env check ─────────────────────────────────────────────────────────────
const stripeSecretKey = process.env["STRIPE_SECRET_KEY"]
const stripeWebhookSecret = process.env["STRIPE_WEBHOOK_SECRET"]

if (!stripeSecretKey) throw new Error("STRIPE_SECRET_KEY .env এ দেওয়া নেই")
if (!stripeWebhookSecret) throw new Error("STRIPE_WEBHOOK_SECRET .env এ দেওয়া নেই")

// ── Stripe initialize ─────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-require-imports
const StripeLib = require("stripe")
const stripe = new StripeLib(stripeSecretKey)

// ── create-intent ─────────────────────────────────────────────────────────
export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { totalAmount, shippingAddress, phone, name, items } = req.body as {
      totalAmount: number
      shippingAddress: string
      phone: string
      name: string
      items: { productId: string; quantity: number }[]
    }

    if (!totalAmount || !name || !phone || !shippingAddress || !items?.length) {
      return res.status(400).json({ error: "সব তথ্য দেওয়া আবশ্যক" })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(totalAmount) * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        customerName: name,
        phone: phone,
        shippingAddress: shippingAddress,
        itemCount: String(items.length),
      },
    })

    console.log("🟡 PaymentIntent তৈরি:", paymentIntent.id)
    return res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    console.error("❌ Error:", error.message)
    return res.status(500).json({ error: error.message })
  }
}

// ── webhook ───────────────────────────────────────────────────────────────
export const handleWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"]

  if (!sig) {
    return res.status(400).json({ error: "Stripe signature নেই" })
  }

  // type কোনোটাই import না করে any ব্যবহার করছি
  // কারণ v22 এ namespace সম্পূর্ণ বদলে গেছে
  let event: any

  try {
    event = await stripe.webhooks.constructEventAsync(
      req.body as Buffer,
      sig,
      stripeWebhookSecret
    )
  } catch (err: any) {
    console.error("❌ Webhook error:", err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
    console.log("✅ Payment সফল!")
    console.log("   ID     :", intent.id)
    console.log("   Amount :", intent.amount / 100, "USD")
    console.log("   Name   :", intent.metadata?.customerName)
    console.log("   Phone  :", intent.metadata?.phone)
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
  }

  if (event.type === "payment_intent.payment_failed") {
    const intent = event.data.object
    console.warn("⚠️ Payment ব্যর্থ:", intent.last_payment_error?.message)
  }

  return res.json({ received: true })
}