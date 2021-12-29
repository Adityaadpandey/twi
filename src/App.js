import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Components/home/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
        
      <Router>
<Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
