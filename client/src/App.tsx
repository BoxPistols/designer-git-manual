import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import { OSProvider } from "./contexts/OSContext";
import Home from "./pages/Home";

// Environment Pages
import Prerequisites from "./pages/environment/Prerequisites";
import CursorInstall from "./pages/environment/Cursor";
import GitInstall from "./pages/environment/Git";
import NodejsInstall from "./pages/environment/Nodejs";

// GitHub Pages
import GitHubAccount from "./pages/github/Account";
import GitSetup from "./pages/github/Setup";
import FirstRepo from "./pages/github/FirstRepo";

// Workflow Pages
import CommitPage from "./pages/workflow/Commit";
import PushPullPage from "./pages/workflow/PushPull";
import HistoryPage from "./pages/workflow/History";
import BranchPage from "./pages/workflow/Branch";

// React Pages
import ReactSetup from "./pages/react/Setup";
import ReactModify from "./pages/react/Modify";

// Advanced Pages
import WSL2Setup from "./pages/advanced/WSL2";
import LinuxBasics from "./pages/advanced/LinuxBasics";
import VSCodeSetup from "./pages/advanced/VSCode";
import Integration from "./pages/advanced/Integration";

function Router() {
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-1 md:ml-64">
        <Switch>
          <Route path={"/"} component={Home} />
          
          {/* Environment Section */}
          <Route path={"/environment/prerequisites"} component={Prerequisites} />
          <Route path={"/environment/cursor"} component={CursorInstall} />
          <Route path={"/environment/git"} component={GitInstall} />
          <Route path={"/environment/nodejs"} component={NodejsInstall} />
          
          {/* GitHub Section */}
          <Route path={"/github/account"} component={GitHubAccount} />
          <Route path={"/github/setup"} component={GitSetup} />
          <Route path={"/github/first-repo"} component={FirstRepo} />
          
          {/* Workflow Section */}
          <Route path={"/workflow/commit"} component={CommitPage} />
          <Route path={"/workflow/push-pull"} component={PushPullPage} />
          <Route path={"/workflow/history"} component={HistoryPage} />
          <Route path={"/workflow/branch"} component={BranchPage} />
          
          {/* React Section */}
          <Route path={"/react/setup"} component={ReactSetup} />
          <Route path={"/react/modify"} component={ReactModify} />
          
          {/* Advanced Section */}
          <Route path={"/advanced/wsl2"} component={WSL2Setup} />
          <Route path={"/advanced/linux-basics"} component={LinuxBasics} />
          <Route path={"/advanced/vscode"} component={VSCodeSetup} />
          <Route path={"/advanced/integration"} component={Integration} />
          
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

// NOTE: Design Philosophy - Journey Map Design
// - Bauhaus × Modern Digital Learning
// - Expresses learning progress as a journey from left to right, top to bottom
// - Visual feedback at each step completion (progress bar, checkmark)
// - Clear information hierarchy: important operations stand out, supplementary info is subtle
// - Emphasizes hands-on learning with interactive elements

function App() {
  return (
    <ErrorBoundary>
      <OSProvider>
        <ThemeProvider
          defaultTheme="light"
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </OSProvider>
    </ErrorBoundary>
  );
}

export default App;
