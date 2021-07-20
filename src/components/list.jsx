import React, { useState } from "react";
import {useSelector } from "react-redux";
import Task from "./task";

function List() {
  

  const tasks = useSelector((store) => store.tasks.tasks);

  return (
    <div>
      {
      
      tasks.map((t) => (

         <Task key={t.id} t={t}/>
                
      
      ))
      
      }
    </div>
  );
}

export default List;
