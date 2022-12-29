
import './App.css';
import { useEffect,useState } from 'react';
import AddTask from './components/AddTask'
import TaskList from './sections/TaskList';

import axios from "axios";


function App() {
  const [data,setData] = useState([])
  const [newTask,setNewTask] = useState("")
  
  // const [writeData, setWriteData] = useState("")

  //API calls
  const TaskData = async () => {
    const response = await axios.get("http://localhost:5000/topics");
    return setData(response.data);
  }

  useEffect(() => {
    TaskData();
  },[])


  
  const PostTask = async() => {
    await axios.post('http://localhost:5000/topics',{
      title:newTask,
      published_at:new Date(),
      score: 0
  }
  )
    .then(function (response) {
      console.log(response);
    })
    .then(TaskData())
    .catch(err=>{
      console.log(err)
    })
  }


  const handleChange=(e)=>{
    setNewTask(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    PostTask()
  }

  return (
    <>
    <div className="w-10/12 mx-auto my-0 mt-10">
    <form className="w-5/12 ml-auto mr-0 mb-12" onSubmit={handleSubmit}>   
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Item</label>
      <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              
          </div>
          <input value={newTask} onChange={handleChange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
      </div>
    </form>

  <TaskList data={data} TaskData={TaskData}/>
  
</div>

  </>
  );
}

export default App;
