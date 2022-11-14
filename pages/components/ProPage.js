import React, { useState } from 'react';
import WishBtn from './WishBtn'
import styles from '../../styles/Banner.module.css';

function ProPage(props) { 

  const [toggle, set] = useState(true);
  const [color, change] = useState("text-gray-500");
  const [bg, changeBg] = useState("bg-gray-200");

  function createMarkup(item) {
    return {__html: item};
  }

  function colorChange(){   
    if(toggle === true){
      change("text-red-500");
      changeBg("bg-red-200");
      set(false);
    }
    else {
      change("text-gray-500");
      changeBg("bg-gray-200");
      set(true);
    }
  }

  return (
    <>
        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="ecommerce" class="lg:w-42 lg:h-80 object-cover object-center rounded" src={props.img} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{props.brand}</h2> 
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{props.title}</h1>
        <div class="flex mb-4 mt-2">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3"> {props.ratings} Reviews</span>
          </span>         
        </div>
        <h1 class="text-gray-900 text-lg title-font font-medium mb-1">About the product</h1>        
        <div dangerouslySetInnerHTML={createMarkup(props.description)}></div>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <div className='relative' dangerouslySetInnerHTML={createMarkup(props.color)}>           
          </div>
          </div>
          <div class="flex ml-6 items-center">
            <div class="relative" dangerouslySetInnerHTML={createMarkup(props.select)} /> 
            </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">₹{parseInt(`${props.price}`).toLocaleString()}</span>         
          <button class={`${styles.slide2} ml-auto flex border-0 py-2 px-7 justify-center items-center rounded`} onClick={props.atc}>Buy Now</button>          
          <WishBtn colorChange = {colorChange}
                  bg = {bg}
                  color = {color} />
        </div>
      </div>
    </div>
  </div>
</section>
{/* <Footer /> */}
    </>
  )
}

export default ProPage
