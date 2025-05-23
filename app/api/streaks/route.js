import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const userStreaks = {
  currentStreak: 28,
  longestStreak: 42,
  streakGoal: 30,
  streakHistory: {
    currentWeek: [true, true, true, true, false, false, false], // Mon to Sun
    previousWeeks: [
      [true, true, true, true, true, true, true], // Week -1
      [true, true, true, true, true, true, true], // Week -2
      [true, true, false, true, true, true, true], // Week -3
    ],
  },
  milestones: [
    { days: 7, achieved: true, reward: "Water Warrior Badge" },
    { days: 14, achieved: true, reward: "100 Bonus Points" },
    { days: 21, achieved: true, reward: "Consistency Champion Badge" },
    { days: 30, achieved: false, reward: "200 Bonus Points" },
    { days: 60, achieved: false, reward: "Elite Streak Badge" },
    { days: 90, achieved: false, reward: "Premium Workout Plan" },
  ],
}

export async function GET() {
  return NextResponse.json(userStreaks)
}

export async function POST(request) {
  try {
    const { action } = await request.json()

    if (action === "check_in") {
      // In a real app, we would update the streak in a database
      return NextResponse.json({
        success: true,
        message: "Daily check-in recorded successfully",
        newStreak: userStreaks.currentStreak + 1,
      })
    }

    if (action === "update_goal") {
      // In a real app, we would update the streak goal in a database
      return NextResponse.json({
        success: true,
        message: "Streak goal updated successfully",
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
