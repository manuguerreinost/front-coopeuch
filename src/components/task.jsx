import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTask, putTaskVigent,deleteTask } from "../redux-duck/tasksDuck";


function Task({t}) {
    const dispatch = useDispatch();
  
    const [edited, setEdited] = useState(false)
    const [value, setValue] = useState(t.description);
  
    return (
        <div>
        <input
        type="checkbox"
        onClick={() => dispatch(putTaskVigent(t))}
        defaultChecked={t.vigent === false ? true : false}
      />

      {edited ? 
                    <input type="text" 
                    
                        value={value}
      
                        onChange={(e) => {
                            setValue(e.target.value);
                            
                        }}

                    />
                    :
                    t.vigent === true ? t.description : <strike>{t.description}</strike>
}
      <button onClick={() => {

           
                   
                    dispatch(putTask(t.id,value))
                    

                    setEdited(!edited)
                  

                }} >{edited?"SAVE":"EDIT"}</button>{" "}


      <button onClick={() => dispatch(deleteTask(t.id))}>DELETE</button>{" "}
    </div>
    );
}

export default Task;