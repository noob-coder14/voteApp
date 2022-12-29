import axios from 'axios'
import React, { useState } from 'react'
import VoteSign from '../assets/down-filled-triangular-arrow.png'


function Votes({currentItem}) {
const [score,changeScore] = useState(currentItem.score)

// const upvote =()=> {
//     changeScore(score+1)
//     console.log(score)
// }
// const downvote =()=> {
//     changeScore(score-1)
//     currentItem.score = score-1
//     // console.log(score)
// }

const upvote = async() => {
    changeScore(score+1)
    currentItem.score = score+1
    await axios.put(`http://localhost:5000/topics/${currentItem._id}/up`,currentItem)
    console.log(currentItem)
}
const downvote = async() => {
    changeScore(score-1)
    currentItem.score = score-1
    await axios.put(`http://localhost:5000/topics/${currentItem._id}/down`,currentItem)
}
  return (
    <div>
        <img className="rotate-180 w-6 h-6" onClick={upvote} src={VoteSign} alt="up"/>
        <p className="text-center">{score}</p>
        <img className="w-6 h-6" onClick={downvote} src={VoteSign} alt="down"/>
    </div>
  )
}

export default Votes