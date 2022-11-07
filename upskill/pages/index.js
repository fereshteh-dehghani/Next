import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'

// export async function getServerSideProps (){
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json();

//   return{
//     props:{
//       todos:data
//     }
//   }
// }


export async function  getServerSideProps () {
  const res = await  fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
  // const data = res.json();

  return{
    props:{
      pokemon:await res.json(),
    },
  }
}

export default function Home({pokemon}) {
// const [pokemon,setpokemon] = useState([]);

// useEffect(()=>{
//   const fetchPokemon = async () =>{
//     const res= await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
//     const data = await  res.json();
//     setpokemon(data);
//   }


//   fetchPokemon();
// },[])

// const [todos,setTodos] = useState([]);
// useEffect(()=>{
//   const fetchTodos = async () =>{
//    setTimeout(async () =>{
//     const res= await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await res.json();
//     setTodos(data);
//    },3000)
//   }
//   fetchTodos();
// },[])


  return (
    <div className={styles.container}>
     <Navbar/>
   <div>
   <h1>Hackaton aps</h1>
<div className={styles.grid}>
{pokemon.length===0 ? (
  <div>
    <p>Loading...</p>
  </div>
):(
  pokemon.map(poke => (
    <div className={styles.card} key={poke.id}>
    <Link href={`pokemon/${poke.id}`}>
      <img
      src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${poke.image}`}
      />
      <h3>{poke.name}</h3>

    </Link>
  </div>
  ))
)}
</div>

   {/* {todos.length===0 ? (
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
   )} */}
    <Link href="/hackaton/">
   Hackaton Tasks
   </Link>
    <Footer />

   </div>
    </div>
  )
}
