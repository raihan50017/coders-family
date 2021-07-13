import "./App.css";
import Home from "./components/pages/home/Home";
import WhatWeDo from "./components/pages/whatwedo/WhatWeDo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OurServices from "./components/pages/our-services/OurServices";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/what-we-do">
          <WhatWeDo></WhatWeDo>
        </Route>
        <Route path="/our-services">
          <OurServices></OurServices>
        </Route>
      </Router>
    </div>
  );
}

export default App;
