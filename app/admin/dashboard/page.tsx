import { Suspense } from "react"
import { DashboardContent } from "@components/admin/dashboard/dashboard-content"

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}

