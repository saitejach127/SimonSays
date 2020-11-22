import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Simon from './components/simonsays/Main'
import Task from './components/simonsays/Task';
import Score from './components/simonsays/Score';
import Common from './components/simonsays/Common';
import Langtask from './components/simonsays/Langtask';
import Scorecard from './components/simonsays/Scorecard';
import './bootstrap.min.css';
import Memorytask from './components/simonsays/Memorytask';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/simonsays" component={Simon} />
        <Route exact path="/simonsays/common" component={Common} />
        <Route exact path="/simonsays/task" component={Task} />
        <Route exact path="/simonsays/langtask" component={Langtask} />
        <Route exact path="/simonsays/memtask" component={Memorytask} />
        <Route exact path="/simonsays/score" component={Score} />
        <Route exact path="/simonsays/leaderboard" component={Scorecard} />
      </Router>
    </React.Fragment>
  );
}

export default App;
