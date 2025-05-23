import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const mealRecommendations = {
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

const mealDetails = {
  "grilled-chicken-salad": {
    id: 4,
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
    recipe: [
      "Grill chicken until golden brown.",
      "Chop spinach and mix with tomatoes.",
      "Add olive oil dressing and toss.",
      "Serve immediately for best taste.",
    ],
  },
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "all"
  const mealId = searchParams.get("id")

  if (mealId) {
    const meal = mealDetails[mealId]
    if (meal) {
      return NextResponse.json({ meal })
    }
    return NextResponse.json({ error: "Meal not found" }, { status: 404 })
  }

  if (type === "recommendations") {
    return NextResponse.json({ meals: mealRecommendations })
  }

  if (type in mealRecommendations) {
    return NextResponse.json({ meals: mealRecommendations[type] })
  }

  return NextResponse.json({ meals: mealRecommendations })
}

export async function POST(request) {
  try {
    const { action, mealId } = await request.json()

    if (action === "like") {
      // In a real app, we would update the liked meals in a database
      return NextResponse.json({
        success: true,
        message: "Meal liked successfully",
      })
    }

    if (action === "save") {
      // In a real app, we would save the meal to the user's saved meals in a database
      return NextResponse.json({
        success: true,
        message: "Meal saved successfully",
      })
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid action",
      },
      { status: 400 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process request",
      },
      { status: 500 },
    )
  }
}
