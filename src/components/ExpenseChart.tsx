import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const expenseData = [
  { name: "Food & Dining", value: 450, color: "hsl(var(--primary))" },
  { name: "Transportation", value: 200, color: "hsl(var(--accent))" },
  { name: "Entertainment", value: 180, color: "hsl(var(--info))" },
  { name: "Books & Supplies", value: 300, color: "hsl(var(--warning))" },
  { name: "Miscellaneous", value: 120, color: "hsl(var(--muted-foreground))" },
];

const monthlyData = [
  { month: "Jan", expenses: 1250, budget: 1500 },
  { month: "Feb", expenses: 1100, budget: 1500 },
  { month: "Mar", expenses: 1350, budget: 1500 },
  { month: "Apr", expenses: 1250, budget: 1500 },
];

export function ExpenseChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Expense Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Monthly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, ""]} />
              <Bar dataKey="expenses" fill="hsl(var(--primary))" />
              <Bar dataKey="budget" fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}