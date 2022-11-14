import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Cart.module.css';
import style from '../../styles/Product.module.css';

function Cart(props) {

  const [spin, setBool] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 2000);
  },[])

  const [confirm, discount] = useState("** Click Discount to check");
  const [price, updated] = useState(parseInt(`${props.price}`)*props.count) 

  const [count, getCount] = useState(props.count);
  const [amount, totalAmount] = useState(parseInt(`${props.price}`)*props.count);
  const [disable, setDisable] = useState({
    save2: false,
    save5: false,
    save10: false
  });

  function selectBox(e){
    if(e.target.value === "domestic"){
      updated(price + 30);
      discount("Click on Discount");
    }
    else {
      updated(price + 60);
      discount("Click on Discount");
    }
  }

  function add(){
    if(price >= 50000){
      discount("Discount Available (Click once more on discount)");
      updated(price - 2500);
    } 
    getCount(count+1);
    updated(amount*(count+1));    
  }

  function checkDisable(){
    if(parseInt(`${props.price}`)*count > 50000 && parseInt(`${props.price}`)*count < 500000){
        setDisable({
          save2: false,
          save5: true,
          save10: true
        });    
        updated(parseInt(`${props.price}`)*count - 2500);       
        discount("** Save2500 coupon applied");
    }

    else if(parseInt(`${props.price}`)*count >= 500000 &&  parseInt(`${props.price}`)*count < 1000000){
      setDisable({
        save2: true,
        save5: false,
        save10: true
      });    
      updated(parseInt(`${props.price}`)*count - 5000);
      discount("** Save5000 coupon applied");
    }

    else if(parseInt(`${props.price}`)*count >= 1000000 && parseInt(`${props.price}`)*count < 2000000){
      setDisable({
        save2: true,
        save5: true,
        save10: false
      });    
     updated(parseInt(`${props.price}`)*count - 10000);
      discount("** Save10000 coupon applied");
    }

    else if(parseInt(`${props.price}`)*count < 50000) {
      setDisable({
        save2: true,
        save5: true,
        save10: true
      });    
      discount("** No discount applicable");
    }   
  }

  function minus(){
    if(count === 1 || count <= 0){
      getCount(1);     
      return false;  
    }   
    else {
    getCount(count-1);
    updated(amount*(count-1));
    discount("Click on Discount");
    }
  }

  return (
    <>    

    {spin ? <><body class="bg-gray-100">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">1 Item</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={props.img} alt="" />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{props.title}</span>
              <span class="text-red-500 text-xs">{props.brand}</span>
              <Link href={'/components/Product'} legacyBehavior><a class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a></Link>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={minus}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border text-center w-8" type="text" value={count} />

            <svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={add}>
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">₹{parseInt(`${props.price}`).toLocaleString()}</span>
          <span class="text-center w-1/5 font-semibold text-sm">₹{(parseInt(`${props.price}`)*count).toLocaleString()}</span>
        </div>
        <Link href={'/components/Product'} legacyBehavior><a class="flex font-semibold text-indigo-600 text-sm mt-10">      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a></Link>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Item 1</span>
          <span class="font-semibold text-sm">₹{(parseInt(`${props.price}`)*count).toLocaleString()}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm" onChange={selectBox}>
          <option>Select Shipping</option>
            <option value='domestic'>Domestic shipping - ₹30</option>
            <option value='inter'>International shipping - ₹60</option>
          </select>
        </div>
        <div className='mt-8 mb-6'>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Discount Coupons</label>
          <select class="block p-2 text-gray-600 w-full text-sm" onClick={checkDisable}>
            <option>Select Coupon</option>
            <option name='save2500' className={styles.disable} disabled={disable.save2}>SAVE2500 (on price more than Rs50000)</option>
            <option name='save5000' className={styles.disable} disabled={disable.save5}>SAVE5000 (on price more than Rs 5Lakh)</option>
            <option name='save10000' className={styles.disable} disabled={disable.save10}>SAVE10000 (on price more than Rs 10Lakh)</option>
          </select>
        </div>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-3 text-sm uppercase">
            <span>Total cost</span>
            <span>₹{price.toLocaleString()}</span>  
          </div>
            <div className='flex justify-center items-center mb-3 text-red-500'>{confirm}</div>                   
         <Link href={'/components/Payment'}> <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
        </div>
      </div>

    </div>
  </div>
</body></> : <div class={style.container}>
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

export default Cart;
