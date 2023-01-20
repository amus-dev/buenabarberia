import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ServicesInside from "./pages/ServicesInside";
import page404 from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services-inside" component={ServicesInside} />
        <Route path="*" component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
