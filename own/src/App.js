import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/NavLink";
import Music from "./components/Music";
import ImageViewer from "./previouspractice/imageviewer/index";

// const PolicyHTML = require('./previouspractice/imageviewer/index.js');
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/music" component={Music} />
            <Route
              path="/previouspractice/imageviewer"
              component={ImageViewer}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
