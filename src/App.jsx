
import './App.css';
import Homepage from './pages/Homepage';
import AccueilDash from './pages/AccueilDash';
import Renitialisation from './pages/Renitialisation';
import Redefinition from './pages/Redefinition';
import Contact_blocked from './components/Contact_bloked/Contact_blocked'
import Profil from './components/Profil/Profil';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

     return(    
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Homepage/>} /> 
         
         <Route path="/Renitialisation" element={<Renitialisation/>} />  
         
         <Route path="/Dashboard" element={<AccueilDash/>} >
            <Route path="Contacts/bloquer" element={<Contact_blocked/>} />
            <Route path="Profil/:id" element={<Profil/>} />
         </Route> 
         
         <Route path="/Redefinition" element={<Redefinition/>} /> 
      </Routes>
    </BrowserRouter>)



}

export default App;
