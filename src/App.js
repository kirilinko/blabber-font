import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact_blocked from './Pages/Contact-blocked/Contact_blocked.js';
import Profil from './Pages/Profil/Profil.js';
import Renitialisation from './Pages/Renitialisation/Renitialisation.js';
import Redefinition from './Pages/Redefinition/Redefinition.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/Renitialisation" element={<Renitialisation/>}> </Route>
       <Route path="/Contact/Bloked/" element={<Contact_blocked/>} /> 
       <Route path="/Contact/:id/Profil" element={<Profil/>} /> 
       <Route path="/Redefinition" element={<Redefinition/>} /> 
       <Route path='*' element={<Profil />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
