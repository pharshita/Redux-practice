import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deletTodo,editTodo } from "../Actions/ApiAction"

export default function Todo() {
  const [Tododata, SetTodoData] = useState('');
  const dispatch = useDispatch();
  const listdata = useSelector((state) => state.TodoReducer.list)
  const text = useSelector((state)=>state.TodoReducer.text)
  console.log(Tododata)

  return (
    <>
      <div>
        <input type="text" placeholder='add items' value={Tododata} onChange={(e) => SetTodoData(e.target.value)}></input>
        <button onClick={() => dispatch(addTodo(Tododata), SetTodoData(''))}>+</button>
      </div>
      <div>
        <div>
          {
            listdata.map((list) => {
              return (

                <div key={list.id} style={{display:"flex",justifyContent:"center"}}>
                  <p>{list.data}</p>
                  <button onClick={() => dispatch(deletTodo(list.id))}>Delete</button>
                  <button type="button" onClick={() => dispatch(editTodo())}> Edit</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
