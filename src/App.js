import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Products from './Products';
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
      <Router>
        <Switch>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
