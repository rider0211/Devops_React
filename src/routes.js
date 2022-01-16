import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./landingpage";
import Calendar from "./pages/calendar";
import Contact from './pages/contact';
import About from './about';

const routes = [
  {
    path: "/",
    element: <Landingpage />,
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
