"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  const [orderId] = useState<string>(() => {
    try {
      const raw = window.localStorage.getItem("luxwatch_last_order")
      if (!raw) return ""
      const order = JSON.parse(raw) as { id?: string }
      return order?.id ?? ""
    } catch {
      return ""
    }
  })

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="mx-auto max-w-4xl py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Merci pour votre commande</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          Votre commande est confirmée. Vous recevrez un email de confirmation sous peu.
        </p>

        <Card className="border border-[color-mix(in_oklab,var(--border)_60%,transparent)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)]">
          <CardContent className="p-6 sm:p-8">
            <p className="text-sm text-[var(--muted-foreground)]">Référence</p>
            <p className="text-lg font-semibold">{orderId ? orderId : "—"}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/">Retour à l’accueil</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/details">Voir les détails</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
