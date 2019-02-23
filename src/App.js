import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './img/towel-girl.png';
import './App.scss';
import PorositySelector from './components/PorositySelector';
import DaysSelector from './components/DaysSelector';
import WeekSelector from './components/WeekSelector';
import WhatsToday from './components/WhatsToday';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Route path="/" component={WhatsToday} />
          <Route path="/porosity" component={PorositySelector} />
          <Route path="/days" component={DaysSelector} />
          <Route path="/week" component={WeekSelector} />
        </div>
      </div>
    </Router>
  );
};

export default App;
