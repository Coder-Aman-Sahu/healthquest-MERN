"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropletIcon, Dumbbell, Moon, Target, Crown, Trophy } from "lucide-react"
import Image from "next/image"

export function Insights() {
  const [activeTab, setActiveTab] = useState("recommendations")

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
    { name: "Step Master", icon: <FootprintIcon className="h-12 w-12 text-white" />, color: "bg-amber-400" },
    { name: "Sleep Champ", icon: <Moon className="h-12 w-12 text-white" />, color: "bg-purple-500" },
    { name: "Goal Crusher", icon: <Target className="h-12 w-12 text-white" />, color: "bg-orange-500" },
    { name: "Calorie King", icon: <Crown className="h-12 w-12 text-white" />, color: "bg-green-500" },
  ]

  const leaderboard = [{ id: 1, name: "Anna", points: 1200, avatar: "/placeholder.svg?height=50&width=50" }]

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="macro">Macro Summary</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="mt-0">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center mb-6">RECOMMENDATIONS & INSIGHTS</h2>

            <div className="space-y-4">
              <Card className="bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <DropletIcon className="h-10 w-10 text-blue-500 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Water intake low</h3>
                      <p className="text-gray-600">Keep a bottle nearby</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Add Water</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Dumbbell className="h-10 w-10 text-green-500 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Great job!</h3>
                      <p className="text-gray-600">Keep up the good work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Moon className="h-10 w-10 text-amber-500 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Sleep duration low</h3>
                      <p className="text-gray-600">Aim for at least 8 hours</p>
                    </div>
                    <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-100">
                      Adjust Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="macro" className="mt-0">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-6">MACRO SUMMARY</h2>

            <div className="grid grid-cols-7 gap-2 h-60 mb-6">
              {macroData.map((day, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="flex-1 flex flex-col-reverse">
                    <div className="bg-blue-500 h-[40%]"></div>
                    <div className="bg-green-500 h-[30%]"></div>
                    <div className="bg-orange-400 h-[30%]"></div>
                  </div>
                  <div className="text-center font-medium mt-2">{day.day}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-around">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500"></div>
                <div>
                  <div>Protein</div>
                  <div className="font-bold">40%</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500"></div>
                <div>
                  <div>Carbs</div>
                  <div className="font-bold">20%</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-400"></div>
                <div>
                  <div>Fats</div>
                  <div className="font-bold">20%</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-0">
          <div>
            <div className="mb-8">
              <div className="flex justify-center items-center mb-8">
                <div className="w-32 h-32 rounded-full border-8 border-yellow-400 flex items-center justify-center bg-white">
                  <DropletIcon className="h-16 w-16 text-blue-500" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div key={index} className="text-center font-medium">
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Badges</h2>

              <div className="grid grid-cols-4 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`${badge.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 relative`}
                    >
                      {badge.icon}
                      <div className="absolute top-0 right-0 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                        <Trophy className="h-3 w-3" />
                      </div>
                    </div>
                    <div className="text-sm font-medium">{badge.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-yellow-500 mr-4">1</div>
                  <div className="h-12 w-12 rounded-full bg-yellow-100 overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Anna"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xl font-bold">Anna</div>
                  <div className="ml-auto text-xl font-bold">1200</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper component for the Step Master icon
function FootprintIcon(props) {
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
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 2.28-5 5-5 2.72 0 4.94 2.28 5 5 .03 2.5-1 3.5-1 5.62V16h-8Z" />
      <path d="M4 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
      <path d="M8 9h4" />
      <path d="M15 22v-6" />
      <path d="M17 20l-2 2-2-2" />
    </svg>
  )
}
