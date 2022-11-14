import React, { useEffect, useState } from 'react'
import ProPage from '../ProPage';
import * as fs from 'node:fs';
import { useRouter } from 'next/router';
import Cart from '../Cart';
import CartProduct from './CartProduct';
import Navbar from '../Navbar';
import Footer from '../Footer';
import style from '../../../styles/Product.module.css';

const Slug = (props) => {

  const router = useRouter();
  const { slug } = router.query;

    const [proArr, getArr] = useState(props.data);
    const [Atc, getAtc] = useState("No items in the cart");
    const [show, notShow] = useState(false);
    const [count, getCount] = useState(0);
    const [error, showError] = useState("");
    const [amount, getAmount] = useState(parseInt(proArr.price));
    const [gcart, setCart] = useState(false); 
    const [items, getItems] = useState([]);
    const [bool, setBool] = useState(false);

    function close(){
      notShow(false);
      setInterval(() => {
        notShow(true);
      }, 60000);
    }

    function atc(){
      getAtc(proArr.title);
      getCount(count + 1);
      const totalAmount = count * amount;   
      getAmount(amount+totalAmount);
      notShow(true);    
    }

    useEffect(()=>{     
      setInterval(() => {
        setBool(true);
        getItems((prevItems) => {
          return [...prevItems, proArr];
        }) 
      }, 1000);
    }, [])

    function cart(){
      if(count === 0){
        showError("** No items added");
        return false;
      }
      else {
        showError("");
        setCart(true);
      }
    }

    function add(){
      getCount(count+1);
      showError("");
    }

    function minus(){
      getCount(count-1);
      if(count === 1 || count <= 0){
        getCount(0);
        showError("** No items added");     
        return false;  
      }
      else {
        showError("");
      }
    }

  return (
    <>   

    {bool ? <><Navbar /> {gcart ? <Cart title = {proArr.title}  price = {proArr.price} img = {proArr.img} brand = {proArr.brand}  count = {count}/> :  
     <>
     <div className='h-auto flex'>
        <ProPage title = {proArr.title}
          price = {proArr.price}
          brand = {proArr.brand}
          ratings = {proArr.ratings}
          description = {proArr.description}
          img = {proArr.img}
          atc = {atc}         
          color = {proArr.color}        
          select = {proArr.select}        
        />    
     
    {items.map((val,index)=> {
      return <>{show && <CartProduct img = {val.img}
                             title = {val.title}
                             price = {val.price}
                             brand = {val.brand}
                             key = {index}
                             id = {index}
                             close = {close}
                             cart = {cart}
                             add = {add}
                             minus = {minus}
                             gcart = {gcart}
                             amount = {amount}
                             error = {error}
                             count = {count}
       /> 
     }
     </>})} </div> </> }  <Footer /></> : <div class={style.container}>
       <div class={style.loadingspinner}>
         <div id={style.square1}></div>
         <div id={style.square2}></div>
         <div id={style.square3}></div>
         <div id={style.square4}></div>
         <div id={style.square5}></div>
       </div>
     </div>}    
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'mobile-1' } }, 
      { params: { slug: 'mobile-2' } },
      { params: { slug: 'mobile-3' } },
      { params: { slug: 'mobile-4' } },
      { params: { slug: 'mobile-5' } },
      { params: { slug: 'mobile-6' } },
      { params: { slug: 'mobile-7' } },
      { params: { slug: 'mobile-8' } },
      { params: { slug: 'ear-1' } }, 
      { params: { slug: 'ear-2' } },
      { params: { slug: 'ear-3' } },
      { params: { slug: 'ear-4' } },
      { params: { slug: 'ear-5' } },
      { params: { slug: 'ear-6' } },
      { params: { slug: 'ear-7' } },
      { params: { slug: 'ear-8' } },
      { params: { slug: 'tv-1' } }, 
      { params: { slug: 'tv-2' } },
      { params: { slug: 'tv-3' } },
      { params: { slug: 'tv-4' } },
      { params: { slug: 'tv-5' } },
      { params: { slug: 'tv-6' } },
      { params: { slug: 'tv-7' } },
      { params: { slug: 'tv-8' } }],
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const { slug } = context.params;
  let myPro = await fs.promises.readFile(`productData/${slug}.json` , 'utf-8')
  let data = JSON.parse(myPro);
  
return {
  props: {data},
}
}

export default Slug;