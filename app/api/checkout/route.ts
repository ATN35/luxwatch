import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") ?? "http://localhost:3000"
    const priceId = process.env.STRIPE_PRICE_ID

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 })
    }

    if (!priceId) {
      return NextResponse.json({ error: "Missing STRIPE_PRICE_ID" }, { status: 500 })
    }

    if (!priceId.startsWith("price_")) {
      return NextResponse.json({ error: "STRIPE_PRICE_ID must start with price_" }, { status: 500 })
    }

    const body = await req.json().catch(() => ({} as { email?: string }))
    const email = typeof body.email === "string" ? body.email : undefined

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      customer_email: email,
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["FR"] },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Stripe error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id" }, { status: 400 })
    }

    if (!sessionId.startsWith("cs_")) {
      return NextResponse.json({ error: "Invalid session_id" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email ?? session.customer_email ?? null,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Stripe error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
