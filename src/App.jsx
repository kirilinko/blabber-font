
import './App.css';
import Homepage from './pages/Homepage';
import AccueilDash from './pages/AccueilDash';
import Renitialisation from './pages/Renitialisation';
import Redefinition from './pages/Redefinition';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

     return(    
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Homepage/>} /> 
         <Route path="/Renitialisation" element={<Renitialisation/>} />  
         <Route path="/Dashboard" element={<AccueilDash/>} /> 
         <Route path="/Redefinition" element={<Redefinition/>} /> 
         <Route path='*' element={<Homepage/>} />
      </Routes>
    </BrowserRouter>)



}

export default App;
