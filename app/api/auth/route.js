import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, age, weight, height, gender } = await request.json()

    // In a real app, we would validate the input and store it in a database
    // For now, we'll just return a success response

    return NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { name, age, weight, height, gender },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Authentication failed",
      },
      { status: 500 },
    )
  }
}
