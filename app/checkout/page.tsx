"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PRODUCT } from "@/lib/product"

type FormState = {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  zip: string
  country: string
}

export default function CheckoutPage() {
  const product = useMemo(
    () => ({
      name: PRODUCT.name,
      price: PRODUCT.price,
      oldPrice: PRODUCT.oldPrice,
    }),
    [],
  )

  const [form, setForm] = useState<FormState>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "France",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitting, setSubmitting] = useState(false)

  const update = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }))
    setErrors((p) => ({ ...p, [key]: "" }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}

    if (!form.email.trim()) e.email = "Email requis"
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Email invalide"

    if (!form.firstName.trim()) e.firstName = "Prénom requis"
    if (!form.lastName.trim()) e.lastName = "Nom requis"
    if (!form.address.trim()) e.address = "Adresse requise"
    if (!form.city.trim()) e.city = "Ville requise"
    if (!form.zip.trim()) e.zip = "Code postal requis"
    if (!form.country.trim()) e.country = "Pays requis"

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const placeOrder = async () => {
    if (!validate()) return
    setSubmitting(true)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      })
      const data = (await res.json()) as { url?: string }

      if (!data.url) throw new Error("Stripe URL missing")
      window.location.href = data.url
    } catch {
      setSubmitting(false)
      alert("Erreur lors de la redirection Stripe. Vérifie tes clés et STRIPE_PRICE_ID.")
    }
  }

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="mx-auto max-w-6xl py-10">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row md:items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Commander</h1>
          <Button variant="outline" asChild>
            <Link href="/">Retour</Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border border-[color-mix(in_oklab,var(--border)_60%,transparent)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4">Informations de livraison</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["Prénom", "firstName"],
                  ["Nom", "lastName"],
                ].map(([label, key]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm text-[var(--muted-foreground)]">{label}</label>
                    <input
                      value={form[key as keyof FormState]}
                      onChange={(e) => update(key as keyof FormState, e.target.value)}
                      className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_40%,transparent)]"
                    />
                    {errors[key as keyof FormState] && (
                      <p className="text-xs text-[var(--primary)]">{errors[key as keyof FormState]}</p>
                    )}
                  </div>
                ))}

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-sm text-[var(--muted-foreground)]">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    inputMode="email"
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_40%,transparent)]"
                  />
                  {errors.email && <p className="text-xs text-[var(--primary)]">{errors.email}</p>}
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-sm text-[var(--muted-foreground)]">Adresse</label>
                  <input
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_40%,transparent)]"
                  />
                  {errors.address && <p className="text-xs text-[var(--primary)]">{errors.address}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-[var(--muted-foreground)]">Ville</label>
                  <input
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none"
                  />
                  {errors.city && <p className="text-xs text-[var(--primary)]">{errors.city}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-[var(--muted-foreground)]">Code postal</label>
                  <input
                    value={form.zip}
                    onChange={(e) => update("zip", e.target.value)}
                    inputMode="numeric"
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none"
                  />
                  {errors.zip && <p className="text-xs text-[var(--primary)]">{errors.zip}</p>}
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-sm text-[var(--muted-foreground)]">Pays</label>
                  <input
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 outline-none"
                  />
                  {errors.country && <p className="text-xs text-[var(--primary)]">{errors.country}</p>}
                </div>
              </div>

              <div className="mt-6">
                <Button size="lg" className="w-full text-base sm:text-lg py-6" onClick={placeOrder} disabled={submitting}>
                  {submitting ? "Redirection vers Stripe..." : "Payer maintenant"}
                </Button>
              </div>

              <p className="text-center text-xs text-[var(--muted-foreground)] mt-4">
                🔒 Paiement 100% sécurisé (Stripe) • Retour sous 30 jours
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[color-mix(in_oklab,var(--border)_60%,transparent)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)]">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>

              <div className="flex justify-between gap-4">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Quantité : 1</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[var(--primary)]">{product.price.toLocaleString("fr-FR")}€</p>
                  <p className="text-sm text-[var(--muted-foreground)] line-through">
                    {product.oldPrice.toLocaleString("fr-FR")}€
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-[color-mix(in_oklab,var(--border)_70%,transparent)]" />

              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span className="text-[var(--primary)]">{product.price.toLocaleString("fr-FR")}€</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
