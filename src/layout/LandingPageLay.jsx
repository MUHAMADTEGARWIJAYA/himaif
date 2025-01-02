import Navbar from '../components/Navbar';
import OurSolution from '../pages/Landing/Devisi';
// import App from "../pages/Landing/Members";
// import Slider from "../pages/Landing/Content";
import WaveInput from '../pages/Landing/Message';
import Footer from '../components/Footer';
import HighlightedTextSplash from '../pages/Landing/Top';

const LandigPage = () => {
    return (
        <div
           className=''
        >
             
            <Navbar />
            {/* <Slider /> */}
            <HighlightedTextSplash />
            {/* <App /> */}
            <OurSolution />
            <WaveInput />
           
            <Footer />
        </div>
    );
};

export default LandigPage;
