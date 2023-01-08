import { useState, useRef } from 'react';
import './App.css';


  function ToDo() {

    const [todoList,setTodoList] = useState([]);
    const [currentTask, setCurrentTask] = useState("");
    const inputTask=useRef(null);
    const addTask=()=>{
        setTodoList([...todoList, {task:currentTask, completed: false}]);
        inputTask.current.value="";
    }
    const deleteTask=(taskToDelete)=>{
        setTodoList(
            todoList.filter((task)=>{
                return task.task !=taskToDelete;
            })

        )
    }
    const completeTask=(taskToCompleted)=>{
        setTodoList(
            todoList.map((task)=>{
                return task.task == taskToCompleted ? 
                {task:taskToCompleted, completed: true} 
                : {task:task.task, completed: task.completed ? true : false};
            })
        )
    }   
      return (
        <div className='ToDo'>
            <h1>ToDo List</h1>

            <div>
                <input 
                ref={inputTask}
                type="text" placeholder='Task...' onChange={(event)=>{
                    setCurrentTask(event.target.value)}}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <hr/>
            <div>
                <ul>
                    {todoList.map((val,key)=>{
                        return ( 
                        <div>
                        <li style={{color: val.completed ? "green" : "red"}} key={key}>{val.task}</li>
                        <button onClick={()=>completeTask(val.task)}>Completed</button>
                        <button onClick={()=>deleteTask(val.task)}>X</button>
                        {val.completed ? (<h1>Task Completed</h1>) 
                        : (<h1>Task not completed</h1>)}
                        </div>
                        );
                    })}
                </ul>
            </div>
        </div>
      )
    
  }
  export default ToDo;