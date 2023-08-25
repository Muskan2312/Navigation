import React from 'react';
import './App.css';
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './components/NavbarElements';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Nav>
        <Bars />
        <NavMenu>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="About">About</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="Events">Events</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="AnnualReport">AnnualReport</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="Teams">Teams</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="Blogs">Blogs</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="home">Home</NavBtnLink>
        </NavBtn>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
