import "./App.css";
import Home from "./components/pages/home/Home";
import WhatWeDo from "./components/pages/whatwedo/WhatWeDo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OurServices from "./components/pages/our-services/OurServices";
import Profile from "./components/pages/protfolio-profile/pages/Profile";
import ProtfolioHome from "./components/pages/protfolio-profile/pages/ProtfolioHome";
import ProtfolioAbout from "./components/pages/protfolio-profile/pages/ProtfolioAbout";
import ProtfolioProfile from "./components/pages/protfolio-profile/pages/ProtfolioProfile";
import ProtfolioNews from "./components/pages/protfolio-profile/pages/ProtfolioNews";
import ProtfolioContact from "./components/pages/protfolio-profile/pages/ProtfolioContact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/what-we-do">
          <WhatWeDo></WhatWeDo>
        </Route>
        <Route exact path="/our-services">
          <OurServices></OurServices>
        </Route>
        <Route path="/protfolio-home">
          <Profile render={() => <ProtfolioHome></ProtfolioHome>}></Profile>
        </Route>
        <Route path="/protfolio-about">
          <Profile render={() => <ProtfolioAbout></ProtfolioAbout>}></Profile>
        </Route>
        <Route path="/protfolio-news">
          <Profile render={() => <ProtfolioNews></ProtfolioNews>}></Profile>
        </Route>
        <Route path="/protfolio-profile">
          <Profile
            render={() => <ProtfolioProfile></ProtfolioProfile>}
          ></Profile>
        </Route>
        <Route path="/protfolio-contact">
          <Profile
            render={() => <ProtfolioContact></ProtfolioContact>}
          ></Profile>
        </Route>
      </Router>
    </div>
  );
}

export default App;
