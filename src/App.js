import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TitleBar from './TitleBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Taskbar from './Taskbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Projects from './Projects';
import ResumePage from './ResumePage';
import CompilerPage from './CompilerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <TitleBar />
        <div className='main'>
          <Sidebar />
          <div className='main-content'>
            <Taskbar />
            <div className='pages'>
              <Routes>  
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/compiler" element={<CompilerPage />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
