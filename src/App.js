
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./components/Hero";
// import Products from "./components/Products";
import Product from "./components/product";
import ReactMainSlider from "./components/ReactMainSlider";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const initialOptions = {
    clientId: "AbTjWFpRNzdIiU3xIOgfARgNbxK4JY5KgcO9A1lwYph9SAlFKMEhxTVbI9FPEVxdsaFTtfPKMk8MXHLQ",
    currency: "USD",
    intent: "capture",
};

  return (
   
   <PayPalScriptProvider options={initialOptions}>
    <div>
      <Navbar />
         <Home/>
     <Switch> 
       
          <Route path="/mainSlider" element={<ReactMainSlider/>}/>
          <Route path="/hero" element={<Hero/>}  />
          <Route path="/layout" element={<Layout />}/>
          <Route path="Footer" element={<Footer />}/>
          <Route path="/MainFooter" element={<MainFooter />}/>
      </Switch>
    </div>
   </PayPalScriptProvider>
     
  );
}

export default App;
