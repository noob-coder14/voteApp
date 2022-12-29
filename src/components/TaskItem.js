import React from 'react'
import Delete from './Delete'
import TaskText from './TaskText'
import Votes from './Votes'

function TaskItem({item,TaskData}) {
  // console.log(item)
  return (
    <>
    <div className="flex w-full mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Votes currentItem={item}/>
      <TaskText itemTitle={item.title}/>
      <Delete currentItem={item} TaskData={TaskData}/>
    </div>

    </>
  )
}

export default TaskItem