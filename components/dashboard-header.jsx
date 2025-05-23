import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader({ user }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800">HEALTHQUEST</h1>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="text-sm text-right">
            <div className="font-medium">{user.name}</div>
            <div className="text-gray-500 text-xs">
              {user.age} yrs • {user.weight} kg
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
