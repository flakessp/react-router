import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import NotFound from './components/NotFound';

import CourseContainer from './components/courses/CourseContainer';
import CourseList from './data/courses';
import Featured from './components/Featured';

// Routes

const Routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="About" />
      <Route path="teachers" component={Teachers} />

      <Route path="courses" component={Courses}>
        <IndexRedirect to="html"/>
        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="css" component={CourseContainer} data={CourseList.CSS}/>
        <Route path="javascript" component={CourseContainer} data={CourseList.JS}/>
      </Route>
      <Route path="featured/:topic/:name" component={Featured}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
