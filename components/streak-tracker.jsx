"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlameIcon as Fire, Award, Calendar, TrendingUp, Trophy } from "lucide-react"

export function StreakTracker() {
  const [currentStreak, setCurrentStreak] = useState(28)
  const [longestStreak, setLongestStreak] = useState(42)
  const [streakGoal, setStreakGoal] = useState(30)

  // Mock data for the streak calendar
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]
  const currentWeek = [true, true, true, true, false, false, false] // Completed days
  const previousWeeks = [
    [true, true, true, true, true, true, true], // Week -1
    [true, true, true, true, true, true, true], // Week -2
    [true, true, false, true, true, true, true], // Week -3
  ]

  // Mock streak milestones
  const streakMilestones = [
    { days: 7, achieved: true, reward: "Water Warrior Badge" },
    { days: 14, achieved: true, reward: "100 Bonus Points" },
    { days: 21, achieved: true, reward: "Consistency Champion Badge" },
    { days: 30, achieved: false, reward: "200 Bonus Points" },
    { days: 60, achieved: false, reward: "Elite Streak Badge" },
    { days: 90, achieved: false, reward: "Premium Workout Plan" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">STREAK TRACKER</h2>
        <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 text-base">
          <Fire className="h-5 w-5 text-orange-500" />
          <span className="font-bold">{currentStreak}</span>
          <span className="text-gray-500">days</span>
        </Badge>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-sm text-gray-500">Current Streak</div>
              <div className="text-2xl font-bold flex items-center gap-1">
                <Fire className="h-5 w-5 text-orange-500" />
                {currentStreak} days
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Longest Streak</div>
              <div className="text-2xl font-bold flex items-center gap-1">
                <Trophy className="h-5 w-5 text-amber-500" />
                {longestStreak} days
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Streak Goal: {streakGoal} days</span>
              </div>
              <div className="text-sm text-gray-500">{Math.round((currentStreak / streakGoal) * 100)}%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${Math.min((currentStreak / streakGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm font-medium mb-2 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Streak Calendar</span>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day, i) => (
                  <div key={i} className="text-xs text-center font-medium">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {currentWeek.map((completed, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-full flex items-center justify-center ${
                      completed
                        ? "bg-orange-500 text-white"
                        : i < new Date().getDay()
                          ? "bg-gray-200"
                          : "border border-dashed border-gray-300"
                    }`}
                  >
                    {completed && <Fire className="h-4 w-4" />}
                  </div>
                ))}
              </div>
              {previousWeeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-1">
                  {week.map((completed, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`h-8 rounded-full flex items-center justify-center ${
                        completed ? "bg-orange-500 text-white" : "bg-gray-200"
                      }`}
                    >
                      {completed && <Fire className="h-4 w-4" />}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2 flex items-center gap-1">
              <Award className="h-4 w-4" />
              <span>Streak Milestones</span>
            </div>
            <div className="space-y-2">
              {streakMilestones.map((milestone) => (
                <div
                  key={milestone.days}
                  className={`p-3 rounded-lg border ${
                    milestone.achieved ? "bg-orange-50 border-orange-200" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {milestone.achieved ? (
                        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                          <Trophy className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium">{milestone.days}</span>
                        </div>
                      )}
                      <div>
                        <div className="font-medium">{milestone.days} Day Streak</div>
                        <div className="text-xs text-gray-500">Reward: {milestone.reward}</div>
                      </div>
                    </div>
                    {milestone.achieved ? (
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Achieved
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                        {milestone.days - currentStreak} days left
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
