"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function DietPlans() {
  const [activeDay, setActiveDay] = useState("mon")
  const [activeTab, setActiveTab] = useState("plan")
  const [selectedMeal, setSelectedMeal] = useState(null)

  const days = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" },
  ]

  const meals = [
    {
      id: "breakfast",
      title: "Breakfast",
      bgColor: "bg-blue-50",
      main: "Oatmeal with Berries",
      alternate: "Vegetable Omlet",
      protein: 12,
      carbs: 45,
      fats: 8,
    },
    {
      id: "lunch",
      title: "Lunch",
      bgColor: "bg-amber-50",
      main: "Grilled Chicken Salad",
      alternate: "Quinoa and Tofu",
      protein: 35,
      carbs: 40,
      fats: 14,
    },
    {
      id: "snack",
      title: "Snack",
      bgColor: "bg-green-50",
      main: "Greek Yogurt",
      alternate: "Handful of Almonds",
      protein: 10,
      carbs: 20,
      fats: 5,
    },
    {
      id: "dinner",
      title: "Dinner",
      bgColor: "bg-red-50",
      main: "Baked Salmon",
      alternate: "Stir-Fried Tempèh",
      protein: 46,
      carbs: 10,
      fats: 22,
    },
  ]

  const mealDetails = {
    "grilled-chicken-salad": {
      title: "Grilled Chicken Salad",
      description: "Balanced meal packed with greens",
      ingredients: ["Grilled Chicken", "Spinach Leaves", "Cherry Tomatoes", "Olive Oil Dressing"],
      macros: {
        protein: 40,
        carbs: 20,
        fats: 10,
      },
      recipe: ["Grill chicken until golden brown.", "Chop spinach and mix with tomatoes."],
    },
  }

  const handleMealClick = (mealId) => {
    if (mealId === "grilled-chicken-salad") {
      setSelectedMeal(mealId)
      setActiveTab("details")
    }
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="plan">Diet Plan</TabsTrigger>
          <TabsTrigger value="details" disabled={!selectedMeal}>
            Meal Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="plan" className="mt-0">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-4">PERSONALIZED DIET PLANS</h2>

            <div className="flex justify-between mb-6 border-b">
              {days.map((day) => (
                <button
                  key={day.value}
                  className={`py-2 px-2 font-medium ${activeDay === day.value ? "border-b-2 border-blue-600" : ""}`}
                  onClick={() => setActiveDay(day.value)}
                >
                  {day.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {meals.map((meal) => (
                <div key={meal.id} className="space-y-2">
                  <div className={`${meal.bgColor} py-2 px-3 font-medium`}>{meal.title}</div>
                  <Card
                    className="cursor-pointer"
                    onClick={() => meal.id === "lunch" && handleMealClick("grilled-chicken-salad")}
                  >
                    <CardContent className="p-4">
                      <div className="grid gap-1">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Main</div>
                          <div>{meal.main}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Alternate</div>
                          <div>{meal.alternate}</div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <div className="font-medium text-blue-600">Protein: {meal.protein}g</div>
                          <div className="font-medium text-green-600">Carbs: {meal.carbs}g</div>
                          <div className="font-medium text-red-600">Fats: {meal.fats}g</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-0">
          {selectedMeal && mealDetails[selectedMeal] && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <UtensilsIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{mealDetails[selectedMeal].title}</h2>
                  <p className="text-gray-500">{mealDetails[selectedMeal].description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Ingredients</h3>
                <div className="space-y-2">
                  {mealDetails[selectedMeal].ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Macros</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-blue-600">Protein</span>
                      <div className="flex items-center gap-2">
                        <span>{mealDetails[selectedMeal].macros.protein}g</span>
                        <span className="text-sm text-gray-500">8%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-blue-500" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-green-600">Carbs</span>
                      <div className="flex items-center gap-2">
                        <span>{mealDetails[selectedMeal].macros.carbs}g</span>
                        <span className="text-sm text-gray-500">8%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "40%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-orange-600">Fats</span>
                      <div className="flex items-center gap-2">
                        <span>{mealDetails[selectedMeal].macros.fats}g</span>
                        <span className="text-sm text-gray-500">2%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-orange-500" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Recipe</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  {mealDetails[selectedMeal].recipe.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <Button
                className="w-full mt-6"
                onClick={() => {
                  setActiveTab("plan")
                  setSelectedMeal(null)
                }}
              >
                Back to Diet Plan
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper component for the icon
function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}
