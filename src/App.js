import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Products from "./components/Products";
import Product from "./components/product";
// import ReactMainSlider from "./components/ReactMainSlider";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact to="/">
          <Home />
          {/* <ReactMainSlider /> */}
        </Route>
      </Router>
    </>
  );
}

export default App;
