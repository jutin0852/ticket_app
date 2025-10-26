import { Dashboard } from "./Dashboard";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { TicketManagement } from "./TicketManagement";


export const Router = ({ currentPath, setCurrentPath }) => {
  const routes = {
    "/": LandingPage,
    "/auth/login": LoginPage,
    "/auth/signup": SignupPage,
    "/dashboard": Dashboard,
    "/tickets": TicketManagement,
  };

  const Component = routes[currentPath] || LandingPage;
  return <Component setCurrentPath={setCurrentPath} />;
};
