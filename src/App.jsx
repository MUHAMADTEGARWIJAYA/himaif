import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Devisi from "./layout/DevisiLay"; 
import LandingPage from "./layout/LandingPageLay";
import LoginForm from "./components/Login";
import AlamatB from "./layout/adminLay";
import AdminInti from "./pages/Admin/inti";
import AddAnggota from "./components/addAnggota";
import Abendahara from "./pages/Admin/Bendahara";
import Asekre from "./pages/Admin/Sekretaris";
import Akominfo from "./pages/Admin/Kominfo";
import Amibat from "./pages/Admin/Mibat";
import Apsdm from "./pages/Admin/PSDM";
import Ahumas from "./pages/Admin/Humas";
import EditAnggotaPage from "./components/editAnggota";

import OurSolution from "./pages/Landing/Devisi";

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi top-left
  }, []);

  return (
    <Routes>
      
      <Route path="/home" element={< OurSolution />}/>

      <Route element={<LandingPage />}>
         <Route path="/" element={<div   />}/>
      </Route>

     
      
      <Route element={<Devisi />}>
         <Route path="/Devisi" element={<div   />}/>
      </Route>


    {/* BACKEND */}
      <Route path="/Login" element={<LoginForm   />}/>


      <Route element={<AlamatB />}>
         <Route path="/hima(12344)atur" element={<AdminInti   />}/>
         <Route path="/add" element={<AddAnggota   />}/>
         <Route path="/bendahara" element={<Abendahara   />}/>
         <Route path="/sekre" element={<Asekre   />}/>
         <Route path="/kominfo" element={<Akominfo   />}/>
         <Route path="/psdm" element={<Apsdm   />}/>
         <Route path="/mibat" element={<Amibat   />}/>
         <Route path="/humas" element={<Ahumas   />}/>
         <Route path="/edit/:id" element={<EditAnggotaPage   />}/>

      </Route>

    </Routes>
  );
}


// import { Route, Routes } from "react-router-dom";
// import Hello from "./pages/Landing/helo";

// export default function App() {
//   return (
// <Routes>
//   <Route path="/" element={<Hello />}/>
//   </Routes>
//   )
// }