import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Stars from './pages/Stars';
import Gnomes from './pages/Gnomes';
import SignIn from './pages/Signin';
import Signup from './pages/Signup';
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stars" component={Stars} />
          <Route path="/gnomes" component={Gnomes} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
