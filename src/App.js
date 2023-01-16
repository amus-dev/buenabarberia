import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import NewsSinglePost from "./pages/NewsSinglePost";
import Gallery from "./pages/Gallery";
import SearchResults from "./pages/SearchResults";
import Services from "./pages/Services";
import ServicesInside from "./pages/ServicesInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/news" component={News} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/news-single-post" component={NewsSinglePost} />
        <Route exact path="/search-results" component={SearchResults} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/ui" component={UserInterface} />
        <Route exact path="/services-inside" component={ServicesInside} />
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
