import Navbar from '../components/Navbar';
import OurSolution from '../pages/Landing/Devisi';
import App from "../pages/Landing/Members";
import Slider from "../pages/Landing/Content";
import WaveInput from '../pages/Landing/Message';
import Footer from '../components/Footer';
const LandigPage = () => {
    return (
        <div className='bg-white'>
            <Navbar /> 
             <Slider />
             <App />
             <OurSolution />
             <WaveInput />

             <Footer />
             
         </div>
    );
};

export default LandigPage;