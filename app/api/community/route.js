import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const posts = [
  {
    id: 1,
    userId: 1,
    content: "Just completed my 4-week strength training program! 💪 Feeling stronger than ever!",
    image: "/placeholder.svg?height=200&width=400",
    likes: 24,
    comments: 8,
    shares: 3,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    workout: {
      name: "Upper Body Strength",
      duration: "45 min",
    },
  },
  {
    id: 2,
    userId: 2,
    content: "New personal best on my 5K run today! The interval training from HealthQuest is really paying off.",
    image: null,
    likes: 18,
    comments: 5,
    shares: 1,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    achievement: {
      name: "Speed Demon",
      icon: "trophy",
    },
  },
  {
    id: 3,
    userId: 3,
    content: "Meal prepping for the week! Following the high-protein plan from HealthQuest.",
    image: "/placeholder.svg?height=200&width=400",
    likes: 32,
    comments: 12,
    shares: 7,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    meal: {
      name: "Grilled Chicken Salad",
      type: "High Protein",
    },
  },
]

const users = [
  {
    id: 1,
    name: "Anna K.",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 28,
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    status: "online",
  },
  {
    id: 2,
    name: "Mike T.",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 15,
    lastActive: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    status: "online",
  },
  {
    id: 3,
    name: "Sarah L.",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 42,
    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: "offline",
  },
]

const challenges = [
  {
    id: 1,
    title: "30-Day Fitness Challenge",
    description: "Complete a workout every day for 30 days",
    participants: 1245,
    startDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    endDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000).toISOString(), // 18 days from now
    progress: 40,
  },
  {
    id: 2,
    title: "Water Drinking Challenge",
    description: "Drink 8 glasses of water daily for 7 days",
    participants: 876,
    startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    progress: 70,
  },
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "all"

  if (type === "posts") {
    // Enrich posts with user data
    const enrichedPosts = posts.map((post) => {
      const user = users.find((u) => u.id === post.userId)
      return {
        ...post,
        user: {
          name: user.name,
          avatar: user.avatar,
          streak: user.streak,
        },
        time: getTimeAgo(new Date(post.createdAt)),
      }
    })
    return NextResponse.json({ posts: enrichedPosts })
  }

  if (type === "users") {
    return NextResponse.json({
      users: users.map((user) => ({
        ...user,
        lastActive: getTimeAgo(new Date(user.lastActive)),
      })),
    })
  }

  if (type === "challenges") {
    return NextResponse.json({
      challenges: challenges.map((challenge) => ({
        ...challenge,
        daysLeft: getDaysLeft(new Date(challenge.endDate)),
      })),
    })
  }

  return NextResponse.json({
    posts: posts.map((post) => {
      const user = users.find((u) => u.id === post.userId)
      return {
        ...post,
        user: {
          name: user.name,
          avatar: user.avatar,
          streak: user.streak,
        },
        time: getTimeAgo(new Date(post.createdAt)),
      }
    }),
    users: users.map((user) => ({
      ...user,
      lastActive: getTimeAgo(new Date(user.lastActive)),
    })),
    challenges: challenges.map((challenge) => ({
      ...challenge,
      daysLeft: getDaysLeft(new Date(challenge.endDate)),
    })),
  })
}

export async function POST(request) {
  try {
    const { type, data } = await request.json()

    if (type === "post") {
      // In a real app, we would save the post to a database
      return NextResponse.json({
        success: true,
        message: "Post created successfully",
      })
    }

    if (type === "like") {
      // In a real app, we would update the like in a database
      return NextResponse.json({
        success: true,
        message: "Post liked successfully",
      })
    }

    if (type === "comment") {
      // In a real app, we would save the comment to a database
      return NextResponse.json({
        success: true,
        message: "Comment added successfully",
      })
    }

    if (type === "join_challenge") {
      // In a real app, we would update the challenge participants in a database
      return NextResponse.json({
        success: true,
        message: "Joined challenge successfully",
      })
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request type",
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

// Helper functions
function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000)

  let interval = seconds / 31536000
  if (interval > 1) return Math.floor(interval) + "y ago"

  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + "mo ago"

  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + "d ago"

  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + "h ago"

  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + "m ago"

  return Math.floor(seconds) + "s ago"
}

function getDaysLeft(endDate) {
  const diffTime = endDate - new Date()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > 0 ? diffDays : 0
}
