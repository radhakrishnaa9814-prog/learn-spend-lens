import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const budgetCategories = [
  { category: "Food & Dining", spent: 450, budget: 600, color: "primary" },
  { category: "Transportation", spent: 200, budget: 250, color: "accent" },
  { category: "Entertainment", spent: 180, budget: 200, color: "info" },
  { category: "Books & Supplies", spent: 300, budget: 350, color: "warning" },
];

export function BudgetProgress() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Budget Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgetCategories.map((item, index) => {
          const percentage = (item.spent / item.budget) * 100;
          const isOverBudget = percentage > 100;
          const isNearLimit = percentage > 80 && percentage <= 100;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.category}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    ${item.spent} / ${item.budget}
                  </span>
                  {isOverBudget && (
                    <Badge variant="destructive" className="text-xs">Over Budget</Badge>
                  )}
                  {isNearLimit && (
                    <Badge variant="secondary" className="text-xs bg-warning text-warning-foreground">
                      Near Limit
                    </Badge>
                  )}
                </div>
              </div>
              <Progress
                value={Math.min(percentage, 100)}
                className="h-2"
              />
              <div className="text-xs text-muted-foreground">
                {percentage.toFixed(0)}% used
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}