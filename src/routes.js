import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./landingpage";
import Calendar from "./pages/calendar";
import BudgetDashboard from "./pages/plateform/budget";
import Summary from './pages/plateform/summary'
import Contact from './pages/contact';
import About from './about';

const routes = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/platform/budget",
    element: <BudgetDashboard />,
  },
  {
    path: "/platform/ec2summary",
    element: <Summary />,
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
