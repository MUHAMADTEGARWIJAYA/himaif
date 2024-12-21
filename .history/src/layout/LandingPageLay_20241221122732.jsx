import Navbar from '../pages/Navbar';

import Card from "../pages/Members";
import Slider from "../pages/Content";

const LandigPage = () => {
    return (
        <div className='bg-[#6617ac]'>
            <Navbar /> 
             <Slider />
             <Card />
         </div>
    );
};

export default LandigPage;