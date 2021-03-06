import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Stars from './pages/Stars';
import Gnomes from './pages/Gnomes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <Router>
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stars" component={Stars} />
          <Route path="/gnomes" component={Gnomes} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
