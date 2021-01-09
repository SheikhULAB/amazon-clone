
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div className="app">
       <Switch>
          <Route path="/checkout">
           <Header></Header>
           <Checkout></Checkout>
          </Route>
          <Route path="/login">

          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
