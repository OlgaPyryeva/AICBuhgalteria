import React,{useState} from 'react';
import DesktopToDoForm from './DesktopToDoForm';
import toDoDone from '../../../img/toDoDone.svg';
import toDoNotDone from '../../../img/toDoNotDone.svg';
import toDoEditPencil from '../../../img/toDoEditPencil.svg';
import toDoDelete from '../../../img/toDoDelete.svg';
import "./DesktopToDo.css"


function DesktopToDo({todos, completeTodo, removeToDo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
    
      const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    if(edit.id){
        return <DesktopToDoForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}
        >
            <div key ={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <img src={toDoDelete}
                onClick={()=>removeToDo(todo.id)}
                className='delete-icon'
                />

                <img src={toDoEditPencil}
                onClick={()=>setEdit({id: todo.id, value:todo.text})}
                className='edit-icon'
                
                />



                <img src={toDoDone}></img> 
                <img src={toDoNotDone}/>
                
           </div>
        </div>
    ))
}

export default DesktopToDo
