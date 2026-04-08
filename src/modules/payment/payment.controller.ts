import { NextFunction, Request, Response } from "express"
import { AppError } from "../../Errors/AppError"
import Stripe from 'stripe';//  env check 
const stripeSecretKey = process.env["STRIPE_SECRET_KEY"!]
const stripeWebhookSecret = process.env["STRIPE_WEBHOOK_SECRET"!]

if (!stripeSecretKey) throw new AppError("STRIPE_SECRET_KEY .env This is not given")
if (!stripeWebhookSecret) throw new AppError("STRIPE_WEBHOOK_SECRET .env This is not given")

//  Stripe initialize 
// eslint-disable-next-line @typescript-eslint/no-require-imports

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16"
});

//  create-intent 
export const createPaymentIntent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { totalAmount, shippingAddress, phone, name, items } = req.body as {
      totalAmount: number
      shippingAddress: string
      phone: string
      name: string
      items: { productId: string; quantity: number }[]
    }

    if (!totalAmount || !name || !phone || !shippingAddress || !items?.length) {
      return next(new AppError("Not all necessary information was provided.", 400));
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

    console.log("🟡 PaymentIntent create:", paymentIntent.id)
    return res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    console.error("❌ Error:", error.message)

    return next(error)
  }
}

// ── webhook ───────────────────────────────────────────────────────────────
export const handleWebhook = async (req: Request, res: Response, next: NextFunction) => {
  const sig = req.headers["stripe-signature"]

  if (!sig) {
    return next(new AppError("Signature not found", 400));
  }


  let event: any

  try {
    event = await stripe.webhooks.constructEventAsync(
      req.body as Buffer,
      sig,
      stripeWebhookSecret
    )
  } catch (err: any) {
    console.error("❌ Webhook error:", err.message)
    return next(err)
  }

  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object

  }

  if (event.type === "payment_intent.payment_failed") {
    const intent = event.data.object
    console.warn(intent.last_payment_error?.message)
  }

  return res.json({ received: true })
}