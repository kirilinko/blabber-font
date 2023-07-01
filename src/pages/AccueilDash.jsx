import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Nav from '../components/Nav/Nav';
import { Outlet } from 'react-router-dom';
 

const AccueilDash = () => {
    return (
        <div>
            <Nav />
             <div className='flex'>
                <Sidebar />
                    <div className="h-screen flex-1 p-7">
                         <Outlet/>
                    </div>
                </div>
        </div>
    );
};

export default AccueilDash;