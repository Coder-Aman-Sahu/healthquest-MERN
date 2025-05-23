"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ChefHat, Heart, Plus, BookmarkPlus, Utensils } from "lucide-react"
import Image from "next/image"

export function MealRecommendations() {
  const [activeTab, setActiveTab] = useState("breakfast")
  const [likedMeals, setLikedMeals] = useState([])
  const [savedMeals, setSavedMeals] = useState([])

  const mealTypes = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "snacks", label: "Snacks" },
  ]

  const meals = {
    breakfast: [
      {
        id: 1,
        title: "Avocado Toast",
        description: "Healthy fats and whole grains",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "15 minutes",
        difficulty: "Easy to prepare",
        calories: 380,
        protein: 15,
        carbs: 35,
        fats: 20,
        tags: ["vegetarian", "high-fiber"],
      },
      {
        id: 2,
        title: "Protein Smoothie",
        description: "Quick post-workout recovery drink",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "15 minutes",
        difficulty: "Easy to prepare",
        calories: 265,
        protein: 25,
        carbs: 30,
        fats: 5,
        tags: ["high-protein", "quick"],
      },
      {
        id: 3,
        title: "Greek Yogurt Bowl",
        description: "Probiotic-rich breakfast with berries",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "10 minutes",
        difficulty: "Easy to prepare",
        calories: 320,
        protein: 22,
        carbs: 40,
        fats: 8,
        tags: ["high-protein", "probiotic"],
      },
    ],
    lunch: [
      {
        id: 4,
        title: "Grilled Chicken Salad",
        description: "Balanced meal packed with greens",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "15 minutes",
        difficulty: "Easy to prepare",
        calories: 330,
        protein: 40,
        carbs: 20,
        fats: 10,
        tags: ["high-protein", "low-carb"],
      },
      {
        id: 5,
        title: "Quinoa Bowl",
        description: "Plant-based protein with vegetables",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "20 minutes",
        difficulty: "Medium",
        calories: 420,
        protein: 18,
        carbs: 65,
        fats: 12,
        tags: ["vegetarian", "high-fiber"],
      },
    ],
    dinner: [
      {
        id: 6,
        title: "Baked Salmon",
        description: "Omega-3 rich dinner option",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "25 minutes",
        difficulty: "Medium",
        calories: 450,
        protein: 46,
        carbs: 10,
        fats: 22,
        tags: ["high-protein", "omega-3"],
      },
      {
        id: 7,
        title: "Stir-Fried Vegetables",
        description: "Quick and nutritious dinner",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "20 minutes",
        difficulty: "Easy to prepare",
        calories: 280,
        protein: 12,
        carbs: 35,
        fats: 8,
        tags: ["vegetarian", "low-calorie"],
      },
    ],
    snacks: [
      {
        id: 8,
        title: "Greek Yogurt",
        description: "Protein-rich snack",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "5 minutes",
        difficulty: "Easy to prepare",
        calories: 150,
        protein: 15,
        carbs: 10,
        fats: 5,
        tags: ["high-protein", "quick"],
      },
      {
        id: 9,
        title: "Handful of Almonds",
        description: "Healthy fats and protein",
        image: "/placeholder.svg?height=200&width=300",
        prepTime: "1 minute",
        difficulty: "Easy to prepare",
        calories: 180,
        protein: 6,
        carbs: 6,
        fats: 15,
        tags: ["high-fat", "quick"],
      },
    ],
  }

  const toggleLike = (mealId) => {
    if (likedMeals.includes(mealId)) {
      setLikedMeals(likedMeals.filter((id) => id !== mealId))
    } else {
      setLikedMeals([...likedMeals, mealId])
    }
  }

  const toggleSave = (mealId) => {
    if (savedMeals.includes(mealId)) {
      setSavedMeals(savedMeals.filter((id) => id !== mealId))
    } else {
      setSavedMeals([...savedMeals, mealId])
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Meal Recommendations</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full mb-6">
          {mealTypes.map((type) => (
            <TabsTrigger key={type.id} value={type.id} className="flex-1">
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {mealTypes.map((type) => (
          <TabsContent key={type.id} value={type.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {meals[type.id].map((meal) => (
                <Card key={meal.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={meal.image || "/placeholder.svg"} alt={meal.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                        onClick={() => toggleLike(meal.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${likedMeals.includes(meal.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                        onClick={() => toggleSave(meal.id)}
                      >
                        <BookmarkPlus
                          className={`h-4 w-4 ${savedMeals.includes(meal.id) ? "fill-blue-500 text-blue-500" : ""}`}
                        />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-1">{meal.title}</h3>
                    <p className="text-gray-500 mb-3">{meal.description}</p>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <ChefHat className="h-4 w-4" />
                        <span>{meal.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{meal.prepTime}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center text-sm mb-4">
                      <div>
                        <div className="font-bold">{meal.calories}</div>
                        <div className="text-gray-500">Calories</div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-600">{meal.protein}g</div>
                        <div className="text-gray-500">Protein</div>
                      </div>
                      <div>
                        <div className="font-bold text-green-600">{meal.carbs}g</div>
                        <div className="text-gray-500">Carbs</div>
                      </div>
                      <div>
                        <div className="font-bold text-orange-600">{meal.fats}g</div>
                        <div className="text-gray-500">Fats</div>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      {meal.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Utensils className="h-4 w-4 mr-2" />
                        View Recipe
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Add to Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
