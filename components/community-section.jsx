"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Users, Trophy, FlameIcon as Fire } from "lucide-react"

export function CommunitySection() {
  const [activeTab, setActiveTab] = useState("feed")

  const posts = [
    {
      id: 1,
      user: {
        name: "Anna K.",
        avatar: "/placeholder.svg?height=40&width=40",
        streak: 28,
      },
      content: "Just completed my 4-week strength training program! 💪 Feeling stronger than ever!",
      image: "/placeholder.svg?height=200&width=400",
      likes: 24,
      comments: 8,
      shares: 3,
      time: "2h ago",
      workout: {
        name: "Upper Body Strength",
        duration: "45 min",
      },
    },
    {
      id: 2,
      user: {
        name: "Mike T.",
        avatar: "/placeholder.svg?height=40&width=40",
        streak: 15,
      },
      content: "New personal best on my 5K run today! The interval training from HealthQuest is really paying off.",
      image: null,
      likes: 18,
      comments: 5,
      shares: 1,
      time: "5h ago",
      achievement: {
        name: "Speed Demon",
        icon: <Trophy className="h-4 w-4" />,
      },
    },
    {
      id: 3,
      user: {
        name: "Sarah L.",
        avatar: "/placeholder.svg?height=40&width=40",
        streak: 42,
      },
      content: "Meal prepping for the week! Following the high-protein plan from HealthQuest.",
      image: "/placeholder.svg?height=200&width=400",
      likes: 32,
      comments: 12,
      shares: 7,
      time: "1d ago",
      meal: {
        name: "Grilled Chicken Salad",
        type: "High Protein",
      },
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "30-Day Fitness Challenge",
      participants: 1245,
      daysLeft: 18,
      progress: 40,
      joined: true,
    },
    {
      id: 2,
      title: "Water Drinking Challenge",
      participants: 876,
      daysLeft: 7,
      progress: 70,
      joined: true,
    },
    {
      id: 3,
      title: "10K Steps Daily",
      participants: 2134,
      daysLeft: 25,
      progress: 20,
      joined: false,
    },
    {
      id: 4,
      title: "Meditation Marathon",
      participants: 543,
      daysLeft: 14,
      progress: 0,
      joined: false,
    },
  ]

  const friends = [
    {
      id: 1,
      name: "Anna K.",
      avatar: "/placeholder.svg?height=40&width=40",
      streak: 28,
      lastActive: "2h ago",
      status: "online",
    },
    {
      id: 2,
      name: "Mike T.",
      avatar: "/placeholder.svg?height=40&width=40",
      streak: 15,
      lastActive: "5h ago",
      status: "online",
    },
    {
      id: 3,
      name: "Sarah L.",
      avatar: "/placeholder.svg?height=40&width=40",
      streak: 42,
      lastActive: "1d ago",
      status: "offline",
    },
    {
      id: 4,
      name: "John D.",
      avatar: "/placeholder.svg?height=40&width=40",
      streak: 7,
      lastActive: "3h ago",
      status: "online",
    },
    {
      id: 5,
      name: "Emily R.",
      avatar: "/placeholder.svg?height=40&width=40",
      streak: 21,
      lastActive: "2d ago",
      status: "offline",
    },
  ]

  const [likedPosts, setLikedPosts] = useState([])

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">COMMUNITY</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="feed">Activity Feed</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-0 space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                    <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.user.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Fire className="h-3 w-3 text-orange-500" />
                      <span>{post.user.streak} day streak</span>
                      <span className="mx-1">•</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                  {post.workout && (
                    <Badge variant="outline" className="ml-auto">
                      {post.workout.name}
                    </Badge>
                  )}
                  {post.achievement && (
                    <Badge variant="outline" className="ml-auto flex items-center gap-1">
                      {post.achievement.icon}
                      {post.achievement.name}
                    </Badge>
                  )}
                  {post.meal && (
                    <Badge variant="outline" className="ml-auto">
                      {post.meal.name}
                    </Badge>
                  )}
                </div>

                <p className="mb-3">{post.content}</p>

                {post.image && (
                  <div className="mb-3 rounded-md overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-auto" />
                  </div>
                )}

                <div className="flex justify-between text-sm text-gray-500">
                  <div>{post.likes} likes</div>
                  <div>{post.comments} comments</div>
                  <div>{post.shares} shares</div>
                </div>
              </CardContent>
              <CardFooter className="p-0 border-t">
                <div className="grid grid-cols-3 w-full">
                  <Button
                    variant="ghost"
                    className={`rounded-none py-2 ${likedPosts.includes(post.id) ? "text-red-500" : ""}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="ghost" className="rounded-none py-2">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Comment
                  </Button>
                  <Button variant="ghost" className="rounded-none py-2">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="challenges" className="mt-0 space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{challenge.title}</h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {challenge.participants}
                  </Badge>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{challenge.progress}% complete</span>
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${challenge.progress}%` }}></div>
                  </div>
                </div>

                <Button variant={challenge.joined ? "outline" : "default"} className="w-full">
                  {challenge.joined ? "View Challenge" : "Join Challenge"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="friends" className="mt-0">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Your Friends</h3>
              <Button variant="outline" size="sm">
                Find Friends
              </Button>
            </div>

            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                      <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        friend.status === "online" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                  <div>
                    <div className="font-medium">{friend.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Fire className="h-3 w-3 text-orange-500" />
                      <span>{friend.streak} day streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{friend.lastActive}</div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
