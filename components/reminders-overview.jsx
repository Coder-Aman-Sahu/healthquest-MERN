"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { DropletIcon, UtensilsCrossed, Moon, Pill } from "lucide-react"

export function RemindersOverview() {
  const [activeTab, setActiveTab] = useState("overview")

  const [reminders, setReminders] = useState([
    { id: 1, type: "water", icon: <DropletIcon className="h-5 w-5 text-blue-500" />, status: "pending", enabled: true },
    {
      id: 2,
      type: "meals",
      icon: <UtensilsCrossed className="h-5 w-5 text-amber-500" />,
      status: "pending",
      enabled: true,
      time: "9:00 AM",
    },
    {
      id: 3,
      type: "sleep",
      icon: <Moon className="h-5 w-5 text-indigo-500" />,
      status: "done",
      enabled: true,
      time: "12:00 PM",
    },
    {
      id: 4,
      type: "supplements",
      icon: <Pill className="h-5 w-5 text-cyan-500" />,
      status: null,
      enabled: true,
      time: "10:30 PM",
    },
  ])

  const toggleReminder = (id) => {
    setReminders((prev) =>
      prev.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  const updateReminderTime = (id, time) => {
    setReminders((prev) => prev.map((reminder) => (reminder.id === id ? { ...reminder, time } : reminder)))
  }

  const dismissReminder = (id) => {
    setReminders((prev) => prev.map((reminder) => (reminder.id === id ? { ...reminder, status: "done" } : reminder)))
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="overview">Reminders Overview</TabsTrigger>
          <TabsTrigger value="settings">Reminder Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 font-medium text-sm px-4 py-2">
              <div>Reminder</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            {reminders.map((reminder) => (
              <div key={reminder.id} className="grid grid-cols-3 gap-4 items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  {reminder.icon}
                  <span className="capitalize">{reminder.type}</span>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      reminder.status === "pending"
                        ? "bg-amber-100 text-amber-800"
                        : reminder.status === "done"
                          ? "bg-green-100 text-green-800"
                          : ""
                    }`}
                  >
                    {reminder.status ? reminder.status.charAt(0).toUpperCase() + reminder.status.slice(1) : ""}
                  </span>
                </div>
                <div>
                  {reminder.status !== "done" && (
                    <Button variant="ghost" size="sm" onClick={() => dismissReminder(reminder.id)}>
                      Dismiss
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-0">
          <div className="space-y-6">
            {reminders.map((reminder) => (
              <div key={reminder.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                  {reminder.icon}
                  <span className="capitalize text-lg font-medium">{reminder.type}</span>
                </div>
                <div className="flex items-center gap-4">
                  {reminder.time && (
                    <Input
                      type="time"
                      value={reminder.time}
                      onChange={(e) => updateReminderTime(reminder.id, e.target.value)}
                      className="w-32"
                    />
                  )}
                  <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                </div>
              </div>
            ))}

            <Button className="w-full bg-blue-600 hover:bg-blue-700">Save Changes</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
