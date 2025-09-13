import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

const insights = [
  {
    type: "prediction",
    title: "Spending Forecast",
    message: "Based on your current patterns, you're likely to spend $1,420 this month, staying within your $1,500 budget.",
    priority: "info",
    icon: TrendingUp
  },
  {
    type: "alert",
    title: "Budget Alert",
    message: "Your food spending is 75% of your monthly budget with 10 days remaining.",
    priority: "warning",
    icon: AlertTriangle
  },
  {
    type: "recommendation",
    title: "Savings Opportunity",
    message: "Consider switching to a student discount plan for transportation to save $15/month.",
    priority: "success",
    icon: Lightbulb
  }
];

export function AIInsights() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "warning":
        return "bg-warning text-warning-foreground";
      case "success":
        return "bg-success text-success-foreground";
      case "info":
      default:
        return "bg-info text-info-foreground";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Financial Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          
          return (
            <div key={index} className="p-4 rounded-lg bg-gradient-card border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${getPriorityColor(insight.priority)}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      AI Generated
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}