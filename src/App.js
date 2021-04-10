
import './App.css';
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import MyCart from "./MyCart";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/fruits">
        <Fruits />
      </Route>
      <Route exact path="/vegetables">
        <Vegetables />
      </Route>
      <Route exact path="/mycart">
        <MyCart />
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
