"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function CTASection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    "Livraison express gratuite (24-48h)",
    "Emballage cadeau luxe offert",
    "Garantie satisfait ou remboursé",
    "Service client 7j/7",
    "Certificat d'authenticité",
    "Extension de garantie gratuite",
  ]

  return (
    <section id="order-section" className="py-20 px-4 bg-[linear-gradient(180deg,var(--background),color-mix(in_oklab,var(--card)_30%,transparent))]">
      <div className="mx-auto max-w-4xl">
        <Card className="border-[color-mix(in_oklab,var(--primary)_30%,transparent)] shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[color-mix(in_oklab,var(--primary)_20%,transparent)] text-[var(--primary)] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Clock className="h-4 w-4" />
                Offre limitée - Plus que 47 montres disponibles
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Commandez votre LUXWATCH maintenant</h2>

              <p className="text-lg text-[var(--muted-foreground)] mb-6">
                Rejoignez les 12 000+ passionnés d&apos;horlogerie qui nous font confiance
              </p>

              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)]">{String(timeLeft.hours).padStart(2, "0")}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">heures</div>
                </div>
                <div className="text-2xl text-[var(--muted-foreground)]">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)]">{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">minutes</div>
                </div>
                <div className="text-2xl text-[var(--muted-foreground)]">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)]">{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">secondes</div>
                </div>
              </div>
            </div>

            <div className="bg-[color-mix(in_oklab,var(--secondary)_50%,transparent)] rounded-lg p-6 mb-8">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="text-sm text-[var(--muted-foreground)] mb-1">Prix spécial aujourd&apos;hui</div>
                  <div className="text-4xl font-bold text-[var(--primary)]">2 499€</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl text-[var(--muted-foreground)] line-through">3 499€</div>
                  <div className="text-sm text-[var(--primary)] font-semibold">Économisez 1 000€</div>
                </div>
              </div>

              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full text-lg py-6 gap-2 group">
              Commander maintenant - 2 499€
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-center text-xs text-[var(--muted-foreground)] mt-4">
              🔒 Paiement 100% sécurisé • Livraison gratuite • Retour sous 30 jours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
