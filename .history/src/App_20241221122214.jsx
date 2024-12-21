import { Routes, Route } from "react-router-dom";
import Slider from "./pages/Content";
import LandingPage from "./layout/LandingPageLay";
import Card from "./pages/Members";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
         <Route path="/" element={<Slider   />}/>
         <Route path="/" element={<Card   />}/>
      </Route>
    </Routes>
  );
}

