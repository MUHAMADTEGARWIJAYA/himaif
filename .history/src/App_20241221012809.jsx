import { Routes, Route } from "react-router-dom";
import ImageSlider from "./pages/Articrel";
import LandingPage from "./layout/LandingPageLay";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
         <Route path="/" element={<ImageSlider   />}/>
      </Route>
    </Routes>
  );
}

