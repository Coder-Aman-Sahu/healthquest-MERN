import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const defaultWorkouts = [
  {
    id: "hiit",
    title: "HIIT",
    duration: "20 min",
    location: ["home", "gym"],
    exercises: [
      { id: 1, name: "Jumping Jacks", duration: "30s" },
      { id: 2, name: "Wall Sit", duration: "30s" },
      { id: 3, name: "Push-ups", duration: "30s" },
    ],
  },
  {
    id: "strength",
    title: "Strength",
    duration: "45 min",
    location: ["gym"],
    exercises: [
      { id: 1, name: "Squats", duration: "3 sets x 12 reps" },
      { id: 2, name: "Bench Press", duration: "3 sets x 10 reps" },
      { id: 3, name: "Rows", duration: "3 sets x 10 reps" },
    ],
  },
  {
    id: "cardio",
    title: "Cardio",
    duration: "30 min",
    location: ["home", "gym"],
    exercises: [
      { id: 1, name: "Running", duration: "15 min" },
      { id: 2, name: "Cycling", duration: "15 min" },
    ],
  },
  {
    id: "yoga",
    title: "Yoga",
    duration: "15 min",
    location: ["home"],
    exercises: [
      { id: 1, name: "Downward Dog", duration: "30s" },
      { id: 2, name: "Warrior Pose", duration: "30s" },
      { id: 3, name: "Child's Pose", duration: "30s" },
    ],
  },
]

export async function GET() {
  return NextResponse.json({ workouts: defaultWorkouts })
}

export async function POST(request) {
  try {
    const { workoutId } = await request.json()

    // In a real app, we would record the completed workout in a database
    // For now, we'll just return a success response

    return NextResponse.json({
      success: true,
      message: "Workout recorded successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to record workout",
      },
      { status: 500 },
    )
  }
}
