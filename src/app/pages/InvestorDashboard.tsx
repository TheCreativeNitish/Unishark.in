import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { BrandLogo } from "../components/BrandLogo";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { startups } from "../data/startups";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  Search,
  Filter,
  Eye,
  Star,
  MessageSquare,
  Building2,
  Users,
  Lightbulb,
  Rocket,
  Hammer
} from "lucide-react";

export function InvestorDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [savedIds, setSavedIds] = useState<number[]>(startups.filter((item) => item.saved).map((item) => item.id));
  const [contactedIds, setContactedIds] = useState<number[]>([]);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const searchValue = searchQuery.toLowerCase();
      const matchesSearch =
        startup.name.toLowerCase().includes(searchValue) ||
        startup.category.toLowerCase().includes(searchValue) ||
        startup.university.toLowerCase().includes(searchValue);

      const matchesStage =
        stageFilter === "all" ||
        (stageFilter === "tier1" && startup.tier === 1) ||
        (stageFilter === "tier2" && startup.tier === 2) ||
        (stageFilter === "tier3" && startup.tier === 3);

      const startupCategory = startup.category.toLowerCase().replace("-", "");
      const matchesCategory = categoryFilter === "all" || startupCategory === categoryFilter;

      return matchesSearch && matchesStage && matchesCategory;
    });
  }, [searchQuery, stageFilter, categoryFilter]);

  const visibleStartups =
    activeTab === "saved"
      ? filteredStartups.filter((startup) => savedIds.includes(startup.id))
      : activeTab === "contacted"
        ? filteredStartups.filter((startup) => contactedIds.includes(startup.id))
        : filteredStartups;

  const toggleSaved = (startupId: number) => {
    setSavedIds((previous) => {
      const exists = previous.includes(startupId);
      if (exists) {
        toast.info("Removed from saved startups");
        return previous.filter((id) => id !== startupId);
      }
      toast.success("Added to saved startups");
      return [...previous, startupId];
    });
  };

  const contactStartup = (startupId: number, startupName: string) => {
    setContactedIds((previous) => {
      if (previous.includes(startupId)) {
        toast.info(`You already contacted ${startupName}`);
        return previous;
      }
      toast.success(`Message sent to ${startupName}`);
      return [...previous, startupId];
    });
  };

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
              <Badge className="bg-amber-500 text-white">Investor</Badge>
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
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-2">Discover Student Startups 🚀</h1>
          <p className="text-foreground/70">Pre-screened, university-verified startups ready for investment</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Total Startups</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">248</div>
            <p className="text-xs text-foreground/60">+12 this week</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Saved Startups</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">18</div>
            <p className="text-xs text-foreground/60">In your watchlist</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Profile Views</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0284c7] flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">156</div>
            <p className="text-xs text-foreground/60">Last 30 days</p>
          </Card>

          <Card className="p-6 border-2 hover:border-[#06b6d4]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/70">Pending Meetings</span>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A1F44] to-[#1e3a8a] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0A1F44]">5</div>
            <p className="text-xs text-foreground/60">Scheduled this week</p>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <Input 
                placeholder="Search startups by name, category, or university..." 
                className="pl-10"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="tier1">Tier 1 - Idea</SelectItem>
                <SelectItem value="tier2">Tier 2 - MVP</SelectItem>
                <SelectItem value="tier3">Tier 3 - Ready</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="edtech">EdTech</SelectItem>
                <SelectItem value="healthtech">HealthTech</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Startups</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="contacted">Contacted</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleStartups.map((startup) => (
                <Card key={startup.id} className="p-6 border-2 hover:border-[#06b6d4]/50 transition-all hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${startup.color} flex items-center justify-center flex-shrink-0`}>
                        <startup.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A1F44] mb-1">{startup.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {startup.category}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className={savedIds.includes(startup.id) ? "text-amber-500" : "text-foreground/40"}
                      onClick={() => toggleSaved(startup.id)}
                    >
                      <Star className={`w-5 h-5 ${savedIds.includes(startup.id) ? "fill-amber-500" : ""}`} />
                    </Button>
                  </div>

                  <p className="text-sm text-foreground/70 mb-4">{startup.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      {startup.tier === 1 && <Lightbulb className="w-4 h-4 text-amber-500" />}
                      {startup.tier === 2 && <Hammer className="w-4 h-4 text-[#06b6d4]" />}
                      {startup.tier === 3 && <Rocket className="w-4 h-4 text-[#0A1F44]" />}
                      <span className="text-sm text-foreground/70">{startup.tierLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-foreground/40" />
                      <span className="text-sm text-foreground/70">{startup.team} members</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg mb-4">
                    <div>
                      <div className="text-xs text-foreground/60 mb-1">UniShark Score</div>
                      <div className="flex items-center gap-2">
                        <div className="text-xl font-bold text-[#0A1F44]">{startup.score}</div>
                        <div className="text-xs text-foreground/60">/100</div>
                      </div>
                    </div>
                    <div className="w-16 h-16">
                      <svg className="transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="3"
                          strokeDasharray={`${startup.score}, 100`}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">Seeking</span>
                      <span className="font-medium text-[#0A1F44]">{startup.funding}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">University</span>
                      <span className="font-medium text-[#0A1F44]">{startup.university}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#0A1F44] hover:bg-[#0A1F44]/90" asChild>
                      <Link to={`/startup/${startup.id}`}>View Pitch</Link>
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => contactStartup(startup.id, startup.name)}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleStartups.length === 0 && (
                <Card className="p-8 text-center col-span-full">
                  <p className="text-foreground/70">No saved startups match your current filters.</p>
                </Card>
              )}
              {visibleStartups.map((startup) => (
                <Card key={startup.id} className="p-6 border-2 hover:border-[#06b6d4]/50 transition-all hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${startup.color} flex items-center justify-center flex-shrink-0`}>
                        <startup.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A1F44] mb-1">{startup.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {startup.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge className="bg-amber-500 text-white">Saved</Badge>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">{startup.description}</p>
                  <Button className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90" asChild>
                    <Link to={`/startup/${startup.id}`}>View Full Profile</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacted">
            {visibleStartups.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 mx-auto text-foreground/20 mb-4" />
                <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">No contacted startups yet</h3>
                <p className="text-foreground/60 mb-6">Start exploring and reach out to startups you're interested in</p>
                <Button className="bg-[#0A1F44] hover:bg-[#0A1F44]/90" onClick={() => setActiveTab("all")}>
                  Browse All Startups
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {visibleStartups.map((startup) => (
                  <Card key={startup.id} className="p-6 border-2 hover:border-[#06b6d4]/50 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A1F44] mb-1">{startup.name}</h3>
                        <p className="text-sm text-foreground/70">{startup.university}</p>
                      </div>
                      <Badge className="bg-[#06b6d4] text-white">Contacted</Badge>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">{startup.description}</p>
                    <Button className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90" asChild>
                      <Link to={`/startup/${startup.id}`}>Open Profile</Link>
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
