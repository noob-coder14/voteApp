import React from 'react'
import TaskItem from '../components/TaskItem'

function TaskList({data,TaskData}) {
   console.log(data)
  
  return (
    <div>
      {data.map(item=>(<TaskItem item = {item} TaskData={TaskData}/>))}
        {/* <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/> */}
    </div>
  )
}

export default TaskList