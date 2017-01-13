import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Home from './components/HomeComponent';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Home}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))