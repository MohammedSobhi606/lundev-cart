import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "./Components/Layouts";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
