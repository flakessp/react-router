import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import NotFound from './components/NotFound';

import CSS from './components/courses/CSS';
import HTML from './components/courses/HTML';
import Javascript from './components/courses/Javascript';

// Routes

const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="teachers" component={Teachers} />

      <Route path="courses" component={Courses}>
        <IndexRedirect to="html"/>
        <Route path="html" component={HTML} />
        <Route path="css" component={CSS} />
        <Route path="javascript" component={Javascript} />
      </Route>
      <Route path="*"  component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
