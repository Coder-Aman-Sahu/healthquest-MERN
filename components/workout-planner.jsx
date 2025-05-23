"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function WorkoutPlanner() {
  const [activeDay, setActiveDay] = useState("mon")
  const [activeTab, setActiveTab] = useState("plan")
  const [activeWorkout, setActiveWorkout] = useState(null)
  const [location, setLocation] = useState("home")

  const days = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" },
  ]

  const workouts = [
    {
      id: "hiit",
      title: "HIIT",
      duration: "20 min",
      location: ["home", "gym"],
      image: null,
    },
    {
      id: "strength",
      title: "Strength",
      duration: "45 min",
      location: ["gym"],
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "cardio",
      title: "Cardio",
      duration: "30 min",
      location: ["home", "gym"],
      image: null,
    },
    {
      id: "yoga",
      title: "Yoga",
      duration: "15 min",
      location: ["home"],
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const exercises = [
    {
      id: 1,
      name: "Jumping Jacks",
      duration: "30s",
      completed: true,
    },
    {
      id: 2,
      name: "Wall Sit",
      duration: "30s",
      completed: true,
    },
    {
      id: 3,
      name: "Push-ups",
      duration: "30s",
      completed: true,
    },
  ]

  const handleStartWorkout = (workoutId) => {
    setActiveWorkout(workoutId)
    setActiveTab("workout")
  }

  const completeWorkout = () => {
    setActiveWorkout(null)
    setActiveTab("plan")
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="plan">Workout Planner</TabsTrigger>
          <TabsTrigger value="workout" disabled={!activeWorkout}>
            Workout Session
          </TabsTrigger>
        </TabsList>

        <TabsContent value="plan" className="mt-0">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-4">WEEKLY WORKOUT PLANNER</h2>

            <div className="flex justify-between mb-6 border-b">
              {days.map((day) => (
                <button
                  key={day.value}
                  className={`py-2 px-2 font-medium ${activeDay === day.value ? "border-b-2 border-blue-600" : ""}`}
                  onClick={() => setActiveDay(day.value)}
                >
                  {day.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {workouts.map((workout) => (
                <div key={workout.id} className="border rounded-lg overflow-hidden">
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">
                          {workout.title} • {workout.duration}
                        </h3>
                        <div className="flex gap-2">
                          <Badge
                            variant={location === "home" ? "default" : "outline"}
                            onClick={() => setLocation("home")}
                          >
                            Home
                          </Badge>
                          <Badge
                            variant={location === "gym" ? "default" : "outline"}
                            onClick={() => setLocation("gym")}
                          >
                            Gym
                          </Badge>
                        </div>
                      </div>
                      {workout.image ? (
                        <div className="flex justify-between items-center mt-3">
                          <Switch />
                          <Image
                            src={workout.image || "/placeholder.svg"}
                            alt={workout.title}
                            width={150}
                            height={100}
                            className="rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center mt-3">
                          <Switch />
                          <span className="ml-2">Home</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2 border-t text-right">
                    <Button onClick={() => handleStartWorkout(workout.id)} className="bg-black hover:bg-gray-800">
                      Start Workout
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Home • Gym</h3>
                    <div className="flex gap-2">
                      <Badge variant={location === "home" ? "default" : "outline"} onClick={() => setLocation("home")}>
                        Home
                      </Badge>
                      <Badge variant={location === "gym" ? "default" : "outline"} onClick={() => setLocation("gym")}>
                        Gym
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <Switch />
                    <span className="ml-2">Home</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 border-t text-right">
                  <Button onClick={() => handleStartWorkout("custom")} className="bg-black hover:bg-gray-800">
                    Start Workout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="workout" className="mt-0">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Workout Session</h2>
            <div className="text-6xl font-bold mb-8">10:25</div>

            <h3 className="text-lg font-medium text-gray-500 mb-4 text-left">EXERCISE LIST</h3>

            <div className="border rounded-lg overflow-hidden mb-6">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className={`flex justify-between items-center p-4 ${index < exercises.length - 1 ? "border-b" : ""}`}
                >
                  <div className="text-left">
                    <div className="font-medium">{exercise.name}</div>
                    <div className="text-gray-500">{exercise.duration}</div>
                  </div>
                  <Badge variant="outline" className="bg-gray-100">
                    Done
                  </Badge>
                </div>
              ))}
            </div>

            <Button onClick={completeWorkout} className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
              Complete Workout
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
