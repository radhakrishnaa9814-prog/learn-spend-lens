import { FinancialCard } from "@/components/FinancialCard";
import { ExpenseChart } from "@/components/ExpenseChart";
import { BudgetProgress } from "@/components/BudgetProgress";
import { RecentTransactions } from "@/components/RecentTransactions";
import { GoalTracker } from "@/components/GoalTracker";
import { AIInsights } from "@/components/AIInsights";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard, 
  PiggyBank, 
  Bell,
  Settings,
  User
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Student Finance Manager</h1>
                <p className="text-sm text-muted-foreground">AI-powered financial tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <FinancialCard
            title="Current Balance"
            value="$2,347.50"
            change="+2.5% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <FinancialCard
            title="Monthly Spending"
            value="$1,250.00"
            change="+$150 from budget"
            changeType="negative"
            icon={TrendingDown}
          />
          <FinancialCard
            title="Monthly Budget"
            value="$1,500.00"
            change="83% utilized"
            changeType="neutral"
            icon={CreditCard}
          />
          <FinancialCard
            title="Savings Goals"
            value="$1,250.00"
            change="+$200 this month"
            changeType="positive"
            icon={PiggyBank}
          />
        </div>

        {/* Charts Section */}
        <div className="mb-6">
          <ExpenseChart />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BudgetProgress />
            <RecentTransactions />
          </div>
          <div className="space-y-6">
            <GoalTracker />
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
