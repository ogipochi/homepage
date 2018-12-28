import React, { Component } from "react";
import Root from "./Root";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Top from "./containers/Top";
import Blog from "./containers/Blog";
import English from "./containers/English";
import Contact from "./containers/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Root>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Route path="/" exact component={Top} />
              <Route path="/blog" component={Blog} />
              <Route path="/english" component={English} />
              <Route path="/contact" component={Contact} />
            </main>
            <Footer />
          </div>
        </Router>
      </Root>
    );
  }
}

export default App;
