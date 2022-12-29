import axios from 'axios'
import React from 'react'
import DeleteIcon from '../assets/delete.png'

function Delete({currentItem,TaskData}) {
  const delteItem = async() => {
    await axios.delete(`http://localhost:5000/topics/${currentItem._id}`)
    TaskData()
  }
  return (
    <>
        <img src={DeleteIcon} onClick={delteItem} className="w-8 h-8 self-center" alt=''/>
    </>
  )
}

export default Delete