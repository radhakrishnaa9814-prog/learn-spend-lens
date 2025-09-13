import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -5.50,
    category: "Food & Dining",
    date: "Today, 2:30 PM",
    type: "expense"
  },
  {
    id: 2,
    description: "Bus Pass",
    amount: -25.00,
    category: "Transportation",
    date: "Today, 8:15 AM",
    type: "expense"
  },
  {
    id: 3,
    description: "Part-time Job",
    amount: 250.00,
    category: "Income",
    date: "Yesterday",
    type: "income"
  },
  {
    id: 4,
    description: "Textbook Purchase",
    amount: -85.99,
    category: "Books & Supplies",
    date: "2 days ago",
    type: "expense"
  },
  {
    id: 5,
    description: "Movie Ticket",
    amount: -12.00,
    category: "Entertainment",
    date: "3 days ago",
    type: "expense"
  },
];

export function RecentTransactions() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button size="sm" className="bg-gradient-primary border-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card">
              <div className="flex-1">
                <div className="font-medium text-sm">{transaction.description}</div>
                <div className="text-xs text-muted-foreground">{transaction.date}</div>
                <Badge variant="secondary" className="text-xs mt-1">
                  {transaction.category}
                </Badge>
              </div>
              <div className={`font-semibold ${
                transaction.type === "income" 
                  ? "text-success" 
                  : "text-foreground"
              }`}>
                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}