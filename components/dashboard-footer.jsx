import Link from "next/link"
import { Home, Dumbbell, Utensils, BarChart3 } from "lucide-react"

export function DashboardFooter() {
  return (
    <footer className="bg-white border-t py-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <Link href="/dashboard" className="flex flex-col items-center text-slate-800">
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/dashboard?tab=diet" className="flex flex-col items-center text-slate-800">
            <Utensils className="h-6 w-6" />
            <span className="text-xs">Diet</span>
          </Link>
          <Link href="/dashboard?tab=workout" className="flex flex-col items-center text-slate-800">
            <Dumbbell className="h-6 w-6" />
            <span className="text-xs">Workout</span>
          </Link>
          <Link href="/dashboard?tab=insights" className="flex flex-col items-center text-slate-800">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs">Insights</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
