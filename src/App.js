import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Components/home/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Login from './Components/Login/Login';
import Signin from './Components/Login/Signin'
import Add from './Components/Post/Add';
import Check from './Components/Check';
import First from './Components/First'


function App() {
  return (
    <>
        
      <Router>
<Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signin/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/add">
            <Add/>
          </Route>
          <Route exact path="/check">
            <Check/>
          </Route>
          <Route exact path="/first">
            <First/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
