import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatbotPage from './components/ChatbotPage/ChatbotPage';
import HomePage from './Pages/HomePage/HomePage'; 
import LoginPage from './components/LoginPage/LoginPage';
import FAQ from './components/FAQ/FAQ';
import Translate from './components/Translate/Translate';
import AboutUs from './Pages/Aboutus/Aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/translate" element={<Translate/>}/>
        <Route path="/Aboutus" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
