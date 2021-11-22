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

  window.dataLayer.push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: window.title
    }
  });
  
  return (
    <div className="App">
      {console.log(window.dataLayer)}
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
