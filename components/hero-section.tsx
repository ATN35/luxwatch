"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Shield, Zap } from "lucide-react"

export function HeroSection() {
  const scrollToOrder = () => {
    const ctaSection = document.getElementById("order-section")
    ctaSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-7 md:space-y-8">
            <Badge className="bg-[color-mix(in_oklab,var(--primary)_20%,transparent)] text-[var(--primary)] border border-[color-mix(in_oklab,var(--primary)_30%,transparent)]">
              🔥 Offre Limitée - Seulement 47 pièces restantes
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.08]">
              Le temps redéfini par l&apos;excellence
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              La montre chronographe ultime. Précision suisse, design intemporel, résistance à l&apos;eau 300m. Édition
              limitée à 500 exemplaires.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[var(--primary)]" />
                <span>Mouvement automatique</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[var(--primary)]" />
                <span>Garantie 5 ans</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[var(--primary)]" />
                <span>Livraison gratuite</span>
              </div>
            </div>

            <div className="pt-2">
              <Button size="lg" className="text-base sm:text-lg px-7 sm:px-8 py-6 gap-2 group" onClick={scrollToOrder}>
                Commander maintenant
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="pt-2">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)]">
                2 499€
                <span className="text-xl sm:text-2xl text-[var(--muted-foreground)] line-through ml-3">3 499€</span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Économisez 1 000€ - Offre valable jusqu&apos;à épuisement du stock
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] sm:aspect-square rounded-2xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)_20%,transparent),transparent)] border border-[color-mix(in_oklab,var(--primary)_30%,transparent)] overflow-hidden">
              <img
                src="/image.png"
                alt="LUXWATCH Chronographe"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center font-bold shadow-2xl">
              <span className="text-[10px] sm:text-xs">NOUVEAU</span>
              <span className="text-xl sm:text-2xl">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
