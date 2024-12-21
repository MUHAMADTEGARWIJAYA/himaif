import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';

const LandigPage = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar /> 
             <Outlet />
         </div>
    );
};

export default LandigPage;