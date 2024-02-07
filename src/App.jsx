import "./App.css";

import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AppLayout>
          <h1>Hello UK income tax calculator</h1>
        </AppLayout>
      </Router>
    </React.StrictMode>
  );
}

export default App;
