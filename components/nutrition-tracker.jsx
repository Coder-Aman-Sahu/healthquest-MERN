"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Plus, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export function NutritionTracker() {
  const [selectedMeal, setSelectedMeal] = useState({
    id: 1,
    title: "Grilled Chicken Salad",
    description: "Balanced meal packed with greens",
    ingredients: ["Grilled Chicken", "Spinach Leaves", "Cherry Tomatoes", "Olive Oil Dressing"],
    macros: {
      protein: 35,
      carbs: 40,
      fats: 14,
    },
    percentages: {
      carbs: 8,
      fats: 2,
    },
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [trackedMeals, setTrackedMeals] = useState([
    {
      id: 1,
      title: "Grilled Chicken Salad",
      mealTime: "Lunch",
      calories: 330,
      protein: 40,
      carbs: 20,
      fats: 10,
    },
    {
      id: 2,
      title: "Oatmeal with Berries",
      mealTime: "Breakfast",
      calories: 280,
      protein: 12,
      carbs: 45,
      fats: 8,
    },
  ])

  const dailyGoals = {
    calories: 2200,
    protein: 150,
    carbs: 220,
    fats: 70,
  }

  const totalNutrition = trackedMeals.reduce(
    (acc, meal) => {
      acc.calories += meal.calories
      acc.protein += meal.protein
      acc.carbs += meal.carbs
      acc.fats += meal.fats
      return acc
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 },
  )

  const calculatePercentage = (current, goal) => {
    return Math.min(Math.round((current / goal) * 100), 100)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Nutrition Tracker</h2>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <Utensils className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{selectedMeal.title}</h3>
              <p className="text-gray-500">{selectedMeal.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Ingredients</h4>
            <div className="space-y-2">
              {selectedMeal.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Macros</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Protein</span>
                  <span>{selectedMeal.macros.protein}g</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Carbs</span>
                  <div>
                    <span>{selectedMeal.macros.carbs}g</span>
                    <span className="text-gray-500 ml-1">{selectedMeal.percentages.carbs}%</span>
                  </div>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Fats</span>
                  <div>
                    <span>{selectedMeal.macros.fats}g</span>
                    <span className="text-gray-500 ml-1">{selectedMeal.percentages.fats}%</span>
                  </div>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search for food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold mb-4">Today's Nutrition</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories</span>
                  <span>
                    {totalNutrition.calories} / {dailyGoals.calories}
                  </span>
                </div>
                <Progress value={calculatePercentage(totalNutrition.calories, dailyGoals.calories)} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-blue-600">Protein</span>
                  <span>
                    {totalNutrition.protein}g / {dailyGoals.protein}g
                  </span>
                </div>
                <Progress
                  value={calculatePercentage(totalNutrition.protein, dailyGoals.protein)}
                  className="h-2 bg-blue-100"
                  indicatorClassName="bg-blue-600"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-green-600">Carbs</span>
                  <span>
                    {totalNutrition.carbs}g / {dailyGoals.carbs}g
                  </span>
                </div>
                <Progress
                  value={calculatePercentage(totalNutrition.carbs, dailyGoals.carbs)}
                  className="h-2 bg-green-100"
                  indicatorClassName="bg-green-600"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-orange-600">Fats</span>
                  <span>
                    {totalNutrition.fats}g / {dailyGoals.fats}g
                  </span>
                </div>
                <Progress
                  value={calculatePercentage(totalNutrition.fats, dailyGoals.fats)}
                  className="h-2 bg-orange-100"
                  indicatorClassName="bg-orange-600"
                />
              </div>
            </div>

            <h4 className="font-medium mb-2">Tracked Meals</h4>
            <div className="space-y-2">
              {trackedMeals.map((meal) => (
                <div key={meal.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{meal.title}</div>
                    <div className="text-xs text-gray-500">{meal.mealTime}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{meal.calories} kcal</div>
                    <div className="text-xs text-gray-500">
                      P: {meal.protein}g • C: {meal.carbs}g • F: {meal.fats}g
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Helper component for the icon
function Utensils(props) {
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
