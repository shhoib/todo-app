import React from 'react'

function TodoList( props) {



  return (
    <li className='list-item'>
      {props.item}
             <span className='icons'>
            <button className='delete-btn' onClick={e=>{
            props.deleteItem(props.index) }}> delete</button>  
       
          </span>

    </li>
  
  )
            }
export default TodoList