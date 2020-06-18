import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Body}>
                <Body />
              </Route>
              <Route path="/about" component={About}>
                <About />
              </Route>
              <Route path="/contact" component={Contact}>
                <Contact />
              </Route>
              <Route path="/services" component={Services}>
                <Services />
              </Route>
            </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
