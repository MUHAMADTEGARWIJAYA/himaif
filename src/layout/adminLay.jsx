import Navbar from '../components/Navbar';
import Sidebar from '../pages/Admin/sidebarAdmin';

import { Outlet } from 'react-router-dom';

const AlamatB = () => {
    return (
        <div className='bg-white'>
            <Navbar /> 
 
           
             <div className="flex flex-1 gap-4">
                <Sidebar className="w-1/4" /> 
                <div className="flex-1">
                <Outlet />
                </div>
            </div>
        
       
        </div>
    );
};

export default AlamatB;

