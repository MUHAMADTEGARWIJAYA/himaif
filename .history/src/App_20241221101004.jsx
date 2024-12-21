import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
    
      </Route>
    </Routes>
  );
}

