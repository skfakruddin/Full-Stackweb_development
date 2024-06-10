import React from 'react'
import AddTasks from './AddTasks'
import TasksCount from './TasksCount'
import TasksLists from './TasksLists'
import {useState} from 'react'

function ManageTasks() {
  let [tasks,setTasks] = useState([])

  function setTasks(task){
    setTasks([...tasks,task])
  }

  return (
    <div className='text-center '>
    <h1>Task Manager</h1>
    <div className='row mt-5 d-flex justify-content-around p-4 text-info'>
    <div className='col-4'>
        <AddTasks data={{tasks,setTasks}} />
    </div>
    <div className='col-4'>
        <TasksLists data={tasks} />
    </div>
    <div className='col-4'>
        <TasksCount data={tasks} />
    </div>
    </div>
    </div>
  )
}

export default ManageTasks;



