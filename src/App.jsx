
import React, {useState} from "react";
import ToDoList from "./ToDoList";


const App = () =>{


  const [inputList , setInputList] = useState("");
  const [Items , setItems] =useState([]); // we are creating an array to store all 
                                          // values of list then we will display that

const itemEvent = (event) =>{

  // whenever we are writing something in input field , same thing should render below it.

  setInputList(event.target.value);
    
}

const listOfItems = () =>{

  // Whenever we are clicking the button we will add the value of input in
  // a array , and at the same time we will display that value in the list.


  setItems( (oldItems) =>{

    return [...oldItems , inputList]
  })

  setInputList("");



}


const deleteItem = (id) =>{
  console.log("working");

  setItems( (oldItems) =>{
    return oldItems.filter( (arrElem , index)=>{

    return index!==id;

    })
  })
}



  return(
    <>
         <div className="mainDiv">
         <div className="centerDiv">
         <br/>

         <h1>To Do list</h1>
         <br/>

         <input type="text" placeholder="Add a todo" 
         value={inputList}
         onChange={itemEvent} />

         <button onClick={listOfItems}>+</button>

         <ol>
           {/* <li>{inputList}</li> */}



      {   Items.map( (itemval , index) =>{

           {/* return <li>{inputList}</li> */}

      return     <ToDoList

                 id={index}
               key ={index}
             text={itemval}
             onSelect={deleteItem}
           />  // created a componect named ToDoList 
         })}



         </ol>



         </div>

         </div>
    </>
  )
}







export default App;