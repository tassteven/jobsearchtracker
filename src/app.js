import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Route,
  Router,
  IndexRoute
} from 'react-router';
import Index from './index';
import UserRoot from './userRoot'
import Statistics from './view/statistics'
import ResumeTracker from './view/resumeTracker'
import Settings from './view/settings'

class App extends React.Component {
  
	render() {
		return (
      <Router history={browserHistory}>
        <Route path='/' component={Index}/>
        <Route path='dashboard' component={UserRoot}>
          <Route path='statistics' component={Statistics} />
          <Route path='tracker' component={ResumeTracker} />
          <Route path='settings' component={Settings} />
        </Route>
      </Router>
		)
	}
}


const dom = document.getElementById('App')
if (dom === null) {
  //Error
  console.error("dom does not exist")
} else {
  ReactDOM.render(<App />, dom);
}