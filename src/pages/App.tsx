import React, { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { StopWatch } from '../components/Stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss'


function App(): JSX.Element {
  const [task, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTaks: ITask) {
    setSelected(selectedTaks);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTaks.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(previousTasks => previousTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            select: false,
            completed: true
          }
        }

        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        task={task}
        selectTask={selectTask}
      />
      <StopWatch 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
