import React from 'react'

function TaskText({itemTitle}) {
    const today = new Date()
    
  return (
    <div className="ml-8 grow self-center">
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">{itemTitle}</h5>
        <p>{today.getDate()}.{today.getMonth()+1}.{today.getFullYear()}</p>
    </div>
  )
}

export default TaskText