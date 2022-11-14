import Link from 'next/link';
import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

function Payment() {

  const [bool, setBool] = useState(true);
  const [card, setCard] = useState("Card");
  const [add, getadd] = useState({
    address: ""
  })
  const [err, geterr] = useState("");

  function validate(e){
    const val = e.target.value;
    const name = e.target.name;

    getadd((prevItem) => {
      return {
        ...prevItem,
        [name]:val
      }
    })
  }

  function click(){
    if(add.address === ""){
      geterr("** Where we will deliver 😕");
      return false;
    }
    else {
      geterr("");
    }
  }

  function select(e){    
      if(e.target.value === "debit"){
        setCard("Card");
        setBool(true);        
      }
      else if(e.target.value === "paytm"){
        setCard("PayTM");
        setBool(false);
      }   
  }

  return (
    <>
    <Navbar />
        <div className="cover w-full h-auto">
            <h1 className='text-center text-3xl mt-5'>Checkout</h1>           
            <form onSubmit={click}>
            <div class="relative mb-4 ml-6">
        <label for="email" class="leading-7 mr-3">Address: </label> <br />
        <textarea required name="address" cols="40" rows="2" class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" onChange={validate} value={add.address}></textarea>   
        <p className='text-red-500'>{err}</p>                       
            <div class="flex items-center mt-8">
            <span class="mr-3">Payment Method: </span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" onChange={select}>               
                <option value="debit">Debit Card</option>
                <option value="paytm">PayTM</option>
                <option disabled>Cash On Delivery</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>        
        <p className='mt-8 ml-6 italic'>Currently we are accepting only prepaid orders</p>       
       {bool ? <Link href={'./Card'}><button type='submit' class="flex ml-6 mt-8 text-white bg-indigo-500 border-0 py-2 mb-4 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={click}>Proceed to fill {card} details</button></Link> : <Link href={'./Paytm'}><button type='submit' class="flex ml-6 mt-8 mb-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={click}>Proceed to fill {card} details</button></Link>}   
       </form>  
        </div>          
       <Footer />
    </>
  )
}

export default Payment
