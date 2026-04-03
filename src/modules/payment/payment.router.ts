import express from "express"
import { createPaymentIntent, handleWebhook } from "./payment.controller"

const router = express.Router()

router.post("/create-intent", createPaymentIntent)

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleWebhook
)

export const paymentrouter = router