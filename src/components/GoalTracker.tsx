import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp } from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    target: 1000,
    current: 650,
    deadline: "Dec 2024",
    category: "Savings"
  },
  {
    id: 2,
    title: "New Laptop",
    target: 1200,
    current: 400,
    deadline: "Mar 2025",
    category: "Purchase"
  },
  {
    id: 3,
    title: "Spring Break Trip",
    target: 800,
    current: 200,
    deadline: "Feb 2025",
    category: "Travel"
  },
];

export function GoalTracker() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Financial Goals
        </CardTitle>
        <Button variant="outline" size="sm">
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;

          return (
            <div key={goal.id} className="space-y-3 p-4 rounded-lg bg-gradient-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">{goal.title}</h4>
                  <p className="text-xs text-muted-foreground">Due: {goal.deadline}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">${goal.current} / ${goal.target}</div>
                  <div className="text-xs text-muted-foreground">${remaining} remaining</div>
                </div>
              </div>
              
              <Progress value={percentage} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {percentage.toFixed(0)}% complete
                </span>
                <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Add Funds
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}