import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { FounderDashboard } from "./pages/FounderDashboard";
import { InvestorDashboard } from "./pages/InvestorDashboard";
import { SignIn } from "./pages/SignIn";
import { GetStarted } from "./pages/GetStarted";
import { ApplyFounder } from "./pages/ApplyFounder";
import { JoinInvestor } from "./pages/JoinInvestor";
import { BookCall } from "./pages/BookCall";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { StartupDetails } from "./pages/StartupDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/founder-dashboard",
    Component: FounderDashboard,
  },
  {
    path: "/investor-dashboard",
    Component: InvestorDashboard,
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/get-started",
    Component: GetStarted,
  },
  {
    path: "/apply-founder",
    Component: ApplyFounder,
  },
  {
    path: "/join-investor",
    Component: JoinInvestor,
  },
  {
    path: "/book-call",
    Component: BookCall,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms",
    Component: TermsOfService,
  },
  {
    path: "/startup/:id",
    Component: StartupDetails,
  },
]);
