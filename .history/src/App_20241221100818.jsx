import { Routes, Route } from "react-router-dom";

import LandingPage from "./layout/LandingPageLay";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
    
      </Route>
    </Routes>
  );
}

