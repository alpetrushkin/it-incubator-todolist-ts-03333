import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState('')

  const addTaskHandler = () => {
    props.addTask(title)
    setTitle('')
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTaskHandler()
    }
   // return  event.key === 'Enter' ? addTaskHandler() : ''
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  // const allChangeFilterHandler = () => {
  //   props.changeFilter("all")
  // }
  //
  // const activeChangeFilterHandler = () => {
  //   props.changeFilter("active")
  // }
  //
  // const completedChangeFilterHandler = () => {
  //   props.changeFilter("completed")
  // }

  const tsarChangeFilter = (value: FilterValuesType) => {
    props.changeFilter(value)
  }

  const removeTaskHandler = (taskId: string) => {
    props.removeTask(taskId)
  }

  return <div>
    <h3>{props.title}</h3>
    <div>
      <input value={title} onKeyDown={onKeyDownHandler} onChange={onChangeHandler}/>
      <button onClick={addTaskHandler}>+</button>
    </div>
    <ul>
      {
        props.tasks.map(t => {
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
              <button onClick={() => removeTaskHandler(t.id)}>x</button>
            </li>
          )
        })
      }
    </ul>
    <div>
      <button onClick={() => tsarChangeFilter('all')}>All</button>
      <button onClick={() => tsarChangeFilter('active')}>Active</button>
      <button onClick={() => tsarChangeFilter('completed')}>Completed</button>
    </div>
  </div>
}
