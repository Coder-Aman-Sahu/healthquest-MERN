import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const defaultReminders = [
  { id: 1, type: "water", status: "pending", enabled: true, time: null },
  { id: 2, type: "meals", status: "pending", enabled: true, time: "9:00 AM" },
  { id: 3, type: "sleep", status: "done", enabled: true, time: "12:00 PM" },
  { id: 4, type: "supplements", status: null, enabled: true, time: "10:30 PM" },
]

export async function GET() {
  return NextResponse.json({ reminders: defaultReminders })
}

export async function PUT(request) {
  try {
    const { reminders } = await request.json()

    // In a real app, we would update the reminders in a database
    // For now, we'll just return the updated reminders

    return NextResponse.json({
      success: true,
      reminders,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update reminders",
      },
      { status: 500 },
    )
  }
}
