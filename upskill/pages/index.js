import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar/>
   <div>
   <h1>Hackaton aps</h1>
   <p>this is a test paragraph this is a test paragraph this is a test paragraph this is a test paragraph</p>
   <p>this is a test paragraph this is a test paragraph this is a test paragraph this is a test paragraph</p>
   <p>this is a test paragraph this is a test paragraph this is a test paragraph this is a test paragraph</p>
    <Footer />

   </div>
    </div>
  )
}
