import { Code, Heart, Lightbulb, ShoppingBag } from "lucide-react";

export type Startup = {
  id: number;
  name: string;
  description: string;
  tier: 1 | 2 | 3;
  tierLabel: string;
  category: "EdTech" | "HealthTech" | "E-commerce" | "FinTech";
  icon: typeof Code;
  score: number;
  funding: string;
  team: number;
  university: string;
  color: string;
  saved: boolean;
};

export const startups: Startup[] = [
  {
    id: 1,
    name: "EduTech AI",
    description: "AI-powered personalized learning platform for students",
    tier: 2,
    tierLabel: "MVP Stage",
    category: "EdTech",
    icon: Code,
    score: 87,
    funding: "$50K - $100K",
    team: 3,
    university: "Stanford University",
    color: "from-[#06b6d4] to-[#0284c7]",
    saved: true,
  },
  {
    id: 2,
    name: "HealthTrack Pro",
    description: "Smart health monitoring app for chronic disease management",
    tier: 3,
    tierLabel: "Investment Ready",
    category: "HealthTech",
    icon: Heart,
    score: 92,
    funding: "$100K - $250K",
    team: 4,
    university: "MIT",
    color: "from-[#0A1F44] to-[#1e3a8a]",
    saved: false,
  },
  {
    id: 3,
    name: "GreenCart",
    description: "Sustainable grocery marketplace connecting local farmers",
    tier: 2,
    tierLabel: "MVP Stage",
    category: "E-commerce",
    icon: ShoppingBag,
    score: 84,
    funding: "$75K - $150K",
    team: 3,
    university: "UC Berkeley",
    color: "from-[#06b6d4] to-[#0284c7]",
    saved: true,
  },
  {
    id: 4,
    name: "CodeMentor",
    description: "Peer-to-peer coding mentorship platform for beginners",
    tier: 1,
    tierLabel: "Idea Stage",
    category: "EdTech",
    icon: Lightbulb,
    score: 76,
    funding: "$25K - $50K",
    team: 2,
    university: "Harvard University",
    color: "from-amber-400 to-orange-500",
    saved: false,
  },
];
