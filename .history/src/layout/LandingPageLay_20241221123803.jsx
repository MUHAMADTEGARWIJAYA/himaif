import Navbar from '../pages/Navbar';

import App from "../pages/Members";
import Slider from "../pages/Content";

const LandigPage = () => {
    return (
        <div className='bg-[#6617ac]'>
            <Navbar /> 
             <Slider />
             <App />
         </div>
    );
};

export default LandigPage;