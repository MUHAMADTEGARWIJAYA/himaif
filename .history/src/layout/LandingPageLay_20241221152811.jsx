import Navbar from '../pages/Navbar';
import OurSolution from '../pages/Devisi';
import App from "../pages/Members";
import Slider from "../pages/Content";

const LandigPage = () => {
    return (
        <div className='bg-white'>
            <Navbar /> 
             <Slider />
             <App />
             <OurSolution />
         </div>
    );
};

export default LandigPage;