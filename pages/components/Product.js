import React, { useEffect, useState } from 'react'
import FrontShow from './FrontShow'
import styles from '../../styles/Product.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Product() {

  const [bool, setBool] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 1000);
  },[])

  return (
    <>
    {bool ? <><Navbar /><FrontShow /><Footer /> </> : <div class={styles.container}>
  <div class={styles.loadingspinner}>
    <div id={styles.square1}></div>
    <div id={styles.square2}></div>
    <div id={styles.square3}></div>
    <div id={styles.square4}></div>
    <div id={styles.square5}></div>
  </div>
</div>}       
    </>
  )
}

export default Product
