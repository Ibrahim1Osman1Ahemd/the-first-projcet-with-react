"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, { useRef, useState } from 'react'
import { compiler } from '../../next.config'


focus
export default function Home() {
  const [todos,setTodos] = useState([])
 const inputRef = useRef()

 const handelClick=()=>{
  console.log(inputRef.current.value)
  const text = inputRef.current.value;
  if(text != ""){
    const newItem = {completed:false , text}
    setTodos([...todos,newItem])
    inputRef.current.value = ""
    inputRef.current.placeholder='add your task...'
  }else{
    inputRef.current.placeholder = "you have to write here..."
    inputRef.current.focus()
  }
 }

 const removeItem = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index,1)
  setTodos(newTodos)
 }
 const doneTask = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos)
  console.log(todos)
 }
  return (
    <main className={styles.main}>
      <div className={styles.todoCard}>
        <h3 className={styles.myhead}>My Todo With React</h3>
        <ul>
          {todos.map(({text , completed},index) => {
            return(
              <div  className={styles.listItem}>
                <li
                  onClick={() => doneTask(index)}
                  className={completed? "done": ""}
                  key={index}
                >
                  {text}
                </li>
                <span onClick={() => removeItem(index)}>❌</span>
              </div>
            )
            })}
        </ul>
        <input placeholder='add your task...' ref={inputRef} className={styles.input}/>
        <button onClick={handelClick}>add</button>
      </div>
    </main>
  )
}
