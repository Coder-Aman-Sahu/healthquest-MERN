import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const recommendations = [
  {
    id: 1,
    type: "water",
    title: "Water intake low",
    description: "Keep a bottle nearby",
    action: "Add Water",
  },
  {
    id: 2,
    type: "workout",
    title: "Great job!",
    description: "Keep up the good work",
    action: null,
  },
  {
    id: 3,
    type: "sleep",
    title: "Sleep duration low",
    description: "Aim for at least 8 hours",
    action: "Adjust Goal",
  },
]

const macroData = [
  { day: "Mon", protein: 40, carbs: 20, fats: 20 },
  { day: "Tue", protein: 35, carbs: 25, fats: 15 },
  { day: "Wed", protein: 38, carbs: 22, fats: 18 },
  { day: "Thu", protein: 42, carbs: 20, fats: 18 },
  { day: "Fri", protein: 36, carbs: 24, fats: 16 },
  { day: "Sat", protein: 39, carbs: 21, fats: 17 },
  { day: "Sun", protein: 41, carbs: 23, fats: 19 },
]

const badges = [
  { id: 1, name: "Step Master", achieved: true },
  { id: 2, name: "Sleep Champ", achieved: true },
  { id: 3, name: "Goal Crusher", achieved: true },
  { id: 4, name: "Calorie King", achieved: true },
]

const leaderboard = [{ id: 1, name: "Anna", points: 1200 }]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "all"

  if (type === "recommendations") {
    return NextResponse.json({ recommendations })
  }

  if (type === "macro") {
    return NextResponse.json({ macroData })
  }

  if (type === "badges") {
    return NextResponse.json({ badges })
  }

  if (type === "leaderboard") {
    return NextResponse.json({ leaderboard })
  }

  return NextResponse.json({
    recommendations,
    macroData,
    badges,
    leaderboard,
  })
}
