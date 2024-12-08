"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Download,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Egg,
} from "lucide-react";
import { EggDefectVisualizer } from "./EggDefectVisualizer";
import { EggDefectPieVisualizer } from "./EggDefectPieVisualizer";

const defectData = [
  { name: "Defect", value: 2000 },
  { name: "Spots", value: 15 },
  { name: "Crack", value: 100 },
];

const weightData = [
  { category: "Small", count: 120 },
  { category: "Medium", count: 250 },
  { category: "Large", count: 180 },
  { category: "Extra Large", count: 90 },
];

const qualityTrendData = [
  { date: "2023-06-01", defectRate: 12, averageWeight: 58 },
  { date: "2023-06-02", defectRate: 10, averageWeight: 59 },
  { date: "2023-06-03", defectRate: 15, averageWeight: 57 },
  { date: "2023-06-04", defectRate: 8, averageWeight: 60 },
  { date: "2023-06-05", defectRate: 11, averageWeight: 58 },
  { date: "2023-06-06", defectRate: 9, averageWeight: 59 },
  { date: "2023-06-07", defectRate: 13, averageWeight: 58 },
];

const COLORS = ["#FFA07A", "#98FB98", "#87CEFA", "#DDA0DD"];

export function DashboardContent() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">
          EGG-CELLENT Dashboard
        </h2>
        <Button
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-100"
        >
          <Bell className="mr-2 h-4 w-4" /> Alerts
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Eggs Processed
            </CardTitle>
            <Egg className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">24,567</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +15% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Defect Rate
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">3.2%</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingDown className="h-3 w-3 mr-1" /> -0.5% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Average Weight
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">58.7g</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +0.3g from yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold flex items-center">
              <Badge
                variant="secondary"
                className="mr-2 bg-green-500 hover:bg-green-600 text-white"
              >
                Operational
              </Badge>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              All systems functioning normally
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Egg Quality Trend
            </CardTitle>
            <CardDescription>
              Daily defect rate and average weight
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={qualityTrendData}>
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="defectRate"
                  stroke="#8884d8"
                  name="Defect Rate (%)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="averageWeight"
                  stroke="#82ca9d"
                  name="Avg Weight (g)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Defect Distribution
            </CardTitle>
            <CardDescription>Visual mapping of egg defects</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="egg" className="w-full">
              <TabsList className="grid w-[300px] grid-cols-2">
                <TabsTrigger value="egg" className="w-full">
                  Egg Visualization
                </TabsTrigger>
                <TabsTrigger value="pie" className="w-full z-10">
                  Pie Chart
                </TabsTrigger>
              </TabsList>
              <TabsContent value="egg">
                <EggDefectVisualizer defects={defectData} />
              </TabsContent>
              <TabsContent value="pie">
                <EggDefectPieVisualizer defects={defectData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Weight Distribution
            </CardTitle>
            <CardDescription>Egg size categories</CardDescription>
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
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Recent Alerts
            </CardTitle>
            <CardDescription>System notifications and warnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center p-2 bg-red-50 rounded-md">
                <Badge variant="destructive" className="mr-2">
                  Critical
                </Badge>
                <span className="text-sm text-red-800">
                  High defect rate detected in Batch #1234
                </span>
              </div>
              <div className="flex items-center p-2 bg-yellow-50 rounded-md">
                <Badge
                  variant="secondary"
                  className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  Warning
                </Badge>
                <span className="text-sm text-yellow-800">
                  Weight calibration needed for Sorter #2
                </span>
              </div>
              <div className="flex items-center p-2 bg-blue-50 rounded-md">
                <Badge
                  variant="secondary"
                  className="mr-2 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Info
                </Badge>
                <span className="text-sm text-blue-800">
                  Maintenance scheduled for tomorrow at 8 AM
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>
    </div>
  );
}
