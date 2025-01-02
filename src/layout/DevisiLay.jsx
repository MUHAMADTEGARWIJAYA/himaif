import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../pages/Content/inti';
import Sekre from '../pages/Content/Sekretaris';
import Bendahara from '../pages/Content/Bendahara';
import Humas from '../pages/Content/Humas';
import Kominfo from '../pages/Content/Kominfo';
import Mibat from '../pages/Content/MinatBakat';
import Psdm from '../pages/Content/PSDM';
const Devisi = () => {
    return (
        <div className='bg-white'>
            <Navbar /> 
            <TeamSection />
            <Sekre />
            <Bendahara />
            <Humas />
            <Kominfo />
            <Mibat />
            <Psdm />
            <Footer />
        
         </div>
    );
};

export default Devisi;