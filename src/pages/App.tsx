import React, { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { StopWatch } from '../components/Stopwatch';
import style from './App.module.scss'


function App(): JSX.Element {
  const [task, setTask] = useState([
		{
			task: 'React',
			time: '02:00:00'
		},
		{
			task: 'Vue',
			time: '01:00:00'
		},
		{
			task: 'Angular',
			time: '05:00:00'
		},
		{
			task: 'Svelt',
			time: '01:00:00'
		},
	])

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List task={task}/>
      <StopWatch/>
    </div>
  );
}

export default App;
