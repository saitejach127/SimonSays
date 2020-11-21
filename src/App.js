import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Task from './components/simonsays/Task';
import './bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/simonsays/task" component={Task} />
        <Route exact path="/simonsays/score" component={Task} />
      </Router>
    </React.Fragment>
  );
}

export default App;
