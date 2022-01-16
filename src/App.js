import React from 'react';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";

import routes from "./routes";
import './style/App.css';

const AppRouter = () => {
  const content = useRoutes(routes);
  return (
    content
  );
}

function App() {
  return (
    <Router>
      <AppRouter />  
    </Router>
  )
}

export default App;
