import { Routes, Route } from "react-router-dom";
import Slider from "./pages/Content";
import LandingPage from "./layout/LandingPageLay";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
         <Route path="/" element={<Slider   />}/>
      </Route>
    </Routes>
  );
}

