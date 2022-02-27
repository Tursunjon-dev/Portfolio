import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './homes/Home';
import Nav from './navbar/Nav';
import About from './about/About';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio'
const App = () => {
  return (
   <BrowserRouter>
    <div className='App'>
    <Nav />
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/portfolio' component={Portfolio} />
    </Switch>
    </div>
    </BrowserRouter>
  );
};


export default App;