import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>home</Link>
        <Link to='/about'><div>about</div></Link>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
