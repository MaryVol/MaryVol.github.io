import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Content from './components/content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import Contact from './components/content/Contact';
import Portfolio from './components/content/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <Profile />
          <div className="content-wrapper">
          <Route exact path='/' component={Content}></Route>
          <Route exact path= '/portfolio' component={Portfolio}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
