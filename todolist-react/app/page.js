"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let rendertask = <h2>no task to show</h2>;

  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key = {i} className="flex  items-center justify-between mb-5 ">
          <div className="flex justify-between  mb-5 w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-700 text-white text-1xl font-bold rounded px-4 py-2"
          >
            Delete

          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5  text-5xl font-bold text-center">
        djsadhasd
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl  border-zinc-800 border-4
        p-5 m-4 "
          placeholder="enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl  border-zinc-800 border-4
        p-5 m-4 "
          placeholder="enter description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-green-300 text-black px-4 py-2 text-2xl font-bold rounded ">
          add task
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8">
        <ul> {rendertask}</ul>
      </div>
    </>
  );
};

export default page;
