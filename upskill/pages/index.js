import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
const [todos,setTodos] = useState([]);
useEffect(()=>{
  const fetchTodos = async () =>{
   setTimeout(async () =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    setTodos(data);
   },3000)
  }
  fetchTodos();
},[])

  return (
    <div className={styles.container}>
     <Navbar/>
   <div>
   <h1>Hackaton aps</h1>
   {todos.length===0 ? (
    <div>Loading...</div>
   ):(
    todos.map(todo =>(
      <div key={todo.id}>
        <p>
          {todo.id} : {todo.title}
        </p>
      </div>
    )
    )
   )}
    <Link href="/hackaton/">
   Hackaton Tasks
   </Link>
    <Footer />

   </div>
    </div>
  )
}
