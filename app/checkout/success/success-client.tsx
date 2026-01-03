"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type SessionData = {
  id: string
  payment_status: string
  amount_total: number | null
  currency: string | null
  customer_email: string | null
}

export default function SuccessClient() {
  const searchParams = useSearchParams()

  const sessionId = useMemo(() => {
    return searchParams.get("session_id")
  }, [searchParams])

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<SessionData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const run = async () => {
      if (!sessionId) {
        setError("Session introuvable. Retourne au checkout.")
        setLoading(false)
        return
      }

      try {
        const res = await fetch(`/api/checkout?session_id=${encodeURIComponent(sessionId)}`)
        const json = await res.json()

        if (!res.ok) {
          setError(json?.error ?? "Erreur de vérification Stripe.")
          setLoading(false)
          return
        }

        setData(json)
      } catch {
        setError("Erreur réseau. Réessaie.")
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [sessionId])

  const isPaid = data?.payment_status === "paid"

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="mx-auto max-w-xl py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {loading ? "Vérification du paiement..." : isPaid ? "Merci pour votre commande ✅" : "Paiement non confirmé"}
        </h1>

        <p className="text-[var(--muted-foreground)] mb-8">
          {loading
            ? "On confirme le statut auprès de Stripe."
            : isPaid
            ? "Votre paiement est validé. Vous recevrez un email de confirmation Stripe."
            : "Le paiement n’a pas été validé (ou l’URL est invalide)."}
        </p>

        <Card className="border border-[color-mix(in_oklab,var(--border)_70%,transparent)] bg-[color-mix(in_oklab,var(--background)_60%,transparent)]">
          <CardContent className="p-6 space-y-4">
            {error ? (
              <div className="text-sm">{error}</div>
            ) : (
              <>
                <div className="text-sm">
                  <div className="opacity-70">Référence Stripe</div>
                  <div className="font-semibold break-all">{data?.id ?? "-"}</div>
                </div>

                <div className="text-sm">
                  <div className="opacity-70">Montant</div>
                  <div className="font-semibold">
                    {data?.amount_total != null
                      ? `${(data.amount_total / 100).toFixed(2)} ${String(data.currency ?? "").toUpperCase()}`
                      : "-"}
                  </div>
                </div>

                <div className="text-sm">
                  <div className="opacity-70">Email</div>
                  <div className="font-semibold break-all">{data?.customer_email ?? "-"}</div>
                </div>

                <div className="text-sm">
                  <div className="opacity-70">Statut</div>
                  <div className="font-semibold">{data?.payment_status ?? "-"}</div>
                </div>
              </>
            )}

            <div className="pt-2 space-y-3">
              <Button asChild className="w-full">
                <Link href="/">Retour à l’accueil</Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/checkout">Revenir au checkout</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
