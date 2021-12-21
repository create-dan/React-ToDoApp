import React from "react";


const ToDoList = (props) =>{


   

  return(
      <>
          <div className="todoStyle">

          <i className="fa fa-times" area-hidden="true" 
          onClick={() =>{

              props.onSelect(props.id);
          }}></i>

              <li>{props.text}</li>
          </div>
      </>
  )
    
}

export default ToDoList;