import { Card, CardContent } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto pt-8 px-4">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">HEALTHQUEST</h1>
              <p className="text-gray-500 text-sm">Your personalized health and fitness assistant</p>
            </div>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
