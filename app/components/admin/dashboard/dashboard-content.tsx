"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Download } from 'lucide-react'

const defectData = [
  { name: "Cracks", value: 15 },
  { name: "Spots", value: 25 },
  { name: "Misshapen", value: 10 },
  { name: "Clean", value: 50 },
]

const weightData = [
  { category: "Small", count: 120 },
  { category: "Medium", count: 250 },
  { category: "Large", count: 180 },
  { category: "Extra Large", count: 90 },
]

const qualityTrendData = [
  { date: "2023-06-01", defectRate: 12, averageWeight: 58 },
  { date: "2023-06-02", defectRate: 10, averageWeight: 59 },
  { date: "2023-06-03", defectRate: 15, averageWeight: 57 },
  { date: "2023-06-04", defectRate: 8, averageWeight: 60 },
  { date: "2023-06-05", defectRate: 11, averageWeight: 58 },
  { date: "2023-06-06", defectRate: 9, averageWeight: 59 },
  { date: "2023-06-07", defectRate: 13, averageWeight: 58 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function DashboardContent() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">EGG-CELLENT Dashboard</h2>
        <Button variant="outline" size="sm">
          <Bell className="mr-2 h-4 w-4" /> Alerts
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Eggs Processed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,567</div>
            <p className="text-xs text-muted-foreground">+15% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Defect Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">-0.5% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58.7g</div>
            <p className="text-xs text-muted-foreground">+0.3g from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center">
              <Badge variant="secondary" className="mr-2 bg-green-500 hover:bg-green-600 text-white">Operational</Badge>
            </div>
            <p className="text-xs text-muted-foreground">All systems functioning normally</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Egg Quality Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={qualityTrendData}>
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="defectRate" fill="#8884d8" name="Defect Rate (%)" />
                <Bar yAxisId="right" dataKey="averageWeight" fill="#82ca9d" name="Avg Weight (g)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Defect Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={defectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {defectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weight Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weightData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Badge variant="destructive" className="mr-2">Critical</Badge>
                <span>High defect rate detected in Batch #1234</span>
              </div>
              <div className="flex items-center">
                <Badge variant="secondary" className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white">Warning</Badge>
                <span>Weight calibration needed for Sorter #2</span>
              </div>
              <div className="flex items-center">
                <Badge variant="secondary" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white">Info</Badge>
                <span>Maintenance scheduled for tomorrow at 8 AM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <Button>
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>
    </div>
  )
}

