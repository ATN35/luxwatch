import { Suspense } from "react"
import SuccessClient from "./success-client"

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen pt-24 px-4" />}>
      <SuccessClient />
    </Suspense>
  )
}
