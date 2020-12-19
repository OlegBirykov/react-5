import React from 'react';
import './bootstrap.css';
import './App.css';
import TaskHeader from './TaskHeader';
import Cards from './task1/Cards';
import Decomposition from './task2/Decomposition';

function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <Cards />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
      <Decomposition /> 
    </div>
  </React.Fragment>);
}

export default App;
 