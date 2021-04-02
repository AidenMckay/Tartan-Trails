import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Stars from './pages/Stars';
import Gnomes from './pages/Gnomes';
import SignIn from './pages/Signin';
import Signup from './pages/Signup';
import Trails from './pages/Trails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Route path="/Trails" component={Trails} />
          <Route path='/directionStoneCircle' component={() => { 
            window.open('https://www.google.com/maps/dir//57.2796219,-2.4455908/@57.2801712,-2.5124769,12z/data=!3m1!4b1')
            window.location.href = '/trails'
          }}/>
          <Route path='/berryhill' component={() => { 
            window.open('https://www.google.com/maps/dir//57.3209949,-2.5507845/@57.3209514,-2.5503983,17z/data=!4m2!4m1!3e0')
            window.location.href = '/trails'
          }}/>
          <Route path='/bishop' component={() => { 
            window.open('https://www.google.com/maps/dir//57.2436465,-2.4602795/@57.2433583,-2.4596352,17.75z/data=!4m2!4m1!3e0')
            window.location.href = '/trails'
          }}/>
          <Route path='/don' component={() => { 
            window.open('https://www.google.com/maps/dir//57.2754432,-2.3824722/@57.2751851,-2.3841566,17z/data=!4m2!4m1!3e0')
            window.location.href = '/trails'
          }}/>
          <Route path='/bass' component={() => { 
            window.open('https://www.google.com/maps/dir//57.2753682,-2.3665627/@57.2746736,-2.3668523,18z/data=!4m2!4m1!3e0')
            window.location.href = '/trails'
          }}/>

        </Switch>
      </>
    </Router>
  );
}

export default App;
