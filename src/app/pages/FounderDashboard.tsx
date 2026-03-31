import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { BrandLogo } from "../components/BrandLogo";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Target, 
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  FileText,
  DollarSign,
  BarChart3
} from "lucide-react";

export function FounderDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <BrandLogo />
              </Link>
              <Badge className="bg-[#06b6d4] text-white">Founder</Badge>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-foreground/70">Here's what's happening with your startup today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Startup Tier</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">Tier 2</div>
            <p className="text-xs text-foreground/60">MVP Stage</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Investor Interest</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">12</div>
            <p className="text-xs text-foreground/60">Active viewers</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Completion</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">68%</div>
            <p className="text-xs text-foreground/60">Profile complete</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Next Session</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">2d</div>
            <p className="text-xs text-foreground/60">With mentor</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Startup Progress */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-[#0A1F44] mb-4">Startup Progress</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">MVP Development</span>
                    <span className="text-sm text-foreground/60">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Business Model</span>
                    <span className="text-sm text-foreground/60">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Investor Pitch</span>
                    <span className="text-sm text-foreground/60">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Legal Documents</span>
                    <span className="text-sm text-foreground/60">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-[#06b6d4]/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06b6d4] flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] mb-1">Next Milestone</h3>
                    <p className="text-sm text-foreground/70">Complete your pitch deck and schedule investor preview session</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tasks & Milestones */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-[#0A1F44] mb-4">Tasks & Milestones</h2>
              
              <Tabs defaultValue="pending" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pending" className="space-y-3 mt-4">
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-5 h-5 rounded border-2 border-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#0A1F44]">Complete financial projections</h4>
                      <p className="text-sm text-foreground/60">Due in 3 days</p>
                    </div>
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-5 h-5 rounded border-2 border-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#0A1F44]">Update product demo video</h4>
                      <p className="text-sm text-foreground/60">Due in 5 days</p>
                    </div>
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-5 h-5 rounded border-2 border-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#0A1F44]">Review legal documents</h4>
                      <p className="text-sm text-foreground/60">Due in 1 week</p>
                    </div>
                    <Clock className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-3 mt-4">
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#0A1F44]">Market research report</h4>
                      <p className="text-sm text-foreground/60">Completed 2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#0A1F44]">Team introduction video</h4>
                      <p className="text-sm text-foreground/60">Completed 5 days ago</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Mentor Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">Your Mentor</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A1F44] to-[#06b6d4] flex items-center justify-center text-white text-xl font-bold">
                  JS
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0A1F44]">John Smith</h4>
                  <p className="text-sm text-foreground/60 mb-2">Senior Product Manager</p>
                  <Badge variant="secondary" className="text-xs">Tech & SaaS</Badge>
                </div>
              </div>
              <Button className="w-full mt-4 bg-[#0A1F44] hover:bg-[#0A1F44]/90" onClick={() => toast.success("Message thread opened with your mentor")}> 
                <MessageSquare className="w-4 h-4 mr-2" />
                Message Mentor
              </Button>
            </Card>

            {/* Investor Interest */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#0A1F44]">Investor Interest</h3>
                <Badge className="bg-[#06b6d4] text-white">12 New</Badge>
              </div>
              
              <div className="space-y-3">
                <div
                  className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => toast.info("Opened investor profile: Venture Capital Inc")}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    VC
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#0A1F44] text-sm">Venture Capital Inc</h4>
                    <p className="text-xs text-foreground/60">Viewed profile today</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => toast.info("Opened investor profile: Angel Fund Partners")}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center text-white font-bold">
                    AF
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#0A1F44] text-sm">Angel Fund Partners</h4>
                    <p className="text-xs text-foreground/60">Saved your startup</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => toast.info("Opened investor profile: Startup Capital")}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center text-white font-bold">
                    SC
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#0A1F44] text-sm">Startup Capital</h4>
                    <p className="text-xs text-foreground/60">Requesting meeting</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4" onClick={() => toast.success("Opening all investor interest")}>
                View All Interest
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success("Upload flow started")}>
                  <FileText className="w-4 h-4 mr-2" />
                  Upload Documents
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success("Funding goal editor opened")}>
                  <DollarSign className="w-4 h-4 mr-2" />
                  Update Funding Goal
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => toast.success("Analytics dashboard opened")}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
