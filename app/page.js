"use client" 
import { Cagliostro } from 'next/font/google';
import React , { useState } from 'react';

const page = () => {
  const [title,settitle]= useState("")
  const [desc, setdesc] = useState("")
  const [mainTask , setMainTask] = useState([])
  const submitHandler =(e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    console.log(mainTask)
  };

  const deleteHandler = (i) =>{
    let copyTask= [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No task Available</h2>
  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
      return(
        <li className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
        </div>
        <button 
        onClick={() =>{
          deleteHandler(i)
        }}
        className='bg-red-400 rounded text-white'>Delete  </button>
        </li>
      );
  });
}
  return (
    <>
      <h1 className='bg-black font-bold  
      text-center' >Nidhi's Todolist</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text 2xl 
        border-black border-4 m-8 px-2 py-2'
        placeholder='The task here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>
       <input type="text" className='text 2xl 
        border-black border-4 m-8 px-2 py-2'
        placeholder='describe the Task'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className='bg-black text-white px-2 py-2 text-2xl
        font-bold rounded'>Add task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  )
}

export default page;

