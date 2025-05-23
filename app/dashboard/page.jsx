"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardFooter } from "@/components/dashboard-footer"
import { RemindersOverview } from "@/components/reminders-overview"
import { DietPlans } from "@/components/diet-plans"
import { WorkoutPlanner } from "@/components/workout-planner"
import { Insights } from "@/components/insights"
import { CommunitySection } from "@/components/community-section"
import { StreakTracker } from "@/components/streak-tracker"
import { MealRecommendations } from "@/components/meal-recommendations"
import { NutritionTracker } from "@/components/nutrition-tracker"
import { Card, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/")
      return
    }

    // Get user data
    const userData = localStorage.getItem("healthquest_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [router])

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader user={user} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Tabs defaultValue="reminders" className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="reminders">Reminders</TabsTrigger>
            <TabsTrigger value="diet">Diet</TabsTrigger>
            <TabsTrigger value="workout">Workout</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="streak">Streak</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <Card>
            <CardContent className="pt-6">
              <TabsContent value="reminders" className="mt-0">
                <RemindersOverview />
              </TabsContent>

              <TabsContent value="diet" className="mt-0">
                <Tabs defaultValue="plans">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="plans">Diet Plans</TabsTrigger>
                    <TabsTrigger value="recommendations">Meal Recommendations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="plans" className="mt-0">
                    <DietPlans />
                  </TabsContent>

                  <TabsContent value="recommendations" className="mt-0">
                    <MealRecommendations />
                  </TabsContent>
                </Tabs>
              </TabsContent>

              <TabsContent value="workout" className="mt-0">
                <WorkoutPlanner />
              </TabsContent>

              <TabsContent value="nutrition" className="mt-0">
                <NutritionTracker />
              </TabsContent>

              <TabsContent value="streak" className="mt-0">
                <StreakTracker />
              </TabsContent>

              <TabsContent value="community" className="mt-0">
                <CommunitySection />
              </TabsContent>

              <TabsContent value="insights" className="mt-0">
                <Insights />
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </main>

      <DashboardFooter />
    </div>
  )
}
