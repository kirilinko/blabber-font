import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Nav from '../components/Nav/Nav';
import Contact_blocked from '../components/Contact_bloked/Contact_blocked'
import Profil from '../components/Profil/Profil';
import {Route, Routes } from 'react-router-dom';

const AccueilDash = () => {
    return (
        <div>
            <Nav />
             <div className='flex'>
                <Sidebar />
                    <div className="h-screen flex-1 p-7">
                    <Contact_blocked/>
                        {/* <h1 className="text-2xl font-semibold ">Messages</h1> */}
                        <Routes>        
                            <Route path="/Dashboard/Contacts/bloquer" element={<Contact_blocked/>} />
                        </Routes>
                    </div>
                </div>
        </div>
    );
};

export default AccueilDash;