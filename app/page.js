"use client";
import React from "react";
import { useState } from "react";

function page() {
  const sumbitHandler=(e)=>{
    e.preventDefault();///prevents forms form from reloading the page
    console.log(task,des);
    setMain([...Maintask,{task,des}]);
    setTask("");//making input field empty
    setDes("");
  }
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [Maintask,setMain] = useState([]);

 let renderTask
  if(Maintask.length>0){
    renderTask= Maintask.map((t,i)=>{
      return <li key={i}className="flex items-center justify-between mb-5">
        <div className="flex justify-between mb-5 w-2/3">
        <h5 className="font-semibold text-2xl">{t.task}</h5>
        <h6 className="font-semibold text-xl">{t.des}</h6>
      </div>
      <button  onClick={()=>{Maintask.splice(i,1);setMain([...Maintask])}} className="bg-red-400 rounded-xl text-white p-3">Delete</button>
      </li>//the one in "Maintask.splice(i,1);setMain" is the no of element to be removed 
    })
  }
  else{ renderTask="no task available"}

  return (
    <>
      <h1 className="bg-black caret-amber-50 text-white p-5 m-0 w-100% h-25 text-5xl text-center ">
        To Do List
      </h1>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter task here"
          name="input"
        />

        <input
          type="text"
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Description here"
          name="input"
        />

        <button className="bg-black text-white text-2xl px-4 py-2 font-bold rounded-2xl m-5 ">
          Add Task
        </button>
      </form>
      <hr></hr>
      <div className="bg-slate-200 p-8">
        <ul>
          {renderTask}

        </ul>
      </div>

    </>
  );
}

export default page;
