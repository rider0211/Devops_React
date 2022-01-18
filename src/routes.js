import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./landingpage";
import Calendar from "./pages/calendar";
import BudgetDashboard from "./pages/dashboard/budget";
import Contact from './pages/contact';
import About from './about';

const routes = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/dashboard/budget",
    element: <BudgetDashboard />,
  },
  
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
