import React, { useEffect, useState } from 'react'
import styles from '../../styles/Product.module.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {

  const [bool, setBool] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 2000);
  },[])

  const [color, setColor] = useState("bg-red-500");
  const [hover, sethover] = useState("bg-red-600");
  const [msg1, setmsg1] = useState("");
  const [msg2, setmsg2] = useState("");
  const [validate, set] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState("Send");
  const [err, seterr] = useState("");
  const [disable, get] = useState(false);
  const [icon, seticon] = useState("");

  function validation(e){
    const val = e.target.value;
    const nameAtri = e.target.name;

    set((currEle) => {
      return {
      ...currEle,
      [nameAtri]: val
      }
  })
  }

  function checkReq(e){
    e.preventDefault();
    if(validate.name === "" || validate.email === "" || validate.message === "" || validate.email.indexOf("@") < 0 || validate.email.indexOf("@") === 1 || validate.email.indexOf(".") < 0 || validate.email.indexOf(".") < 5){
      seterr("**Please fill all fields correctly !");
      return false;
    }
    else {
      seterr("");
      setLoading("Wait while sending...");
      setTimeout(() => {
        setmsg1("We have received your request");
        setmsg2("We will be communicating through your email");
        setLoading("Sent");
        seticon(<i class="bi bi-check-lg ml-1"></i>)
        setColor("bg-purple-500");
        sethover("bg-emerald-600");
        get(true);
      }, 2000);  
    }
  }

  return (
    <>

    {bool ? <><Navbar /> <section class="text-gray-600 body-font relative bg-amber-200">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-8">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">We would love to hear from you. <br />All your queries will be solved at the earliest</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name<span className='text-red-500 text-lg'> *</span></label>
            <input type="text" onChange={validation} id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='of' />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email<span className='text-red-500 text-lg'> *</span></label>
            <input type="email" onChange={validation} id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='of' />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message<span className='text-red-500 text-lg'> *</span></label>
            <textarea id="message" onChange={validation} name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Enter your query here....'></textarea>
          </div>
        </div>
        <div class="p-2 w-full pt-1 mt-2 border-gray-200 text-center">
          <p className='text-red-500'>{err}</p>
        </div>
        <div class="p-2 w-full">
          <button class={`flex mx-auto text-white ${color} border-0 py-2 px-8 focus:outline-none hover:${hover} rounded text-lg`} disabled={disable} onClick={checkReq}>{loading}{icon}</button>
        </div>
        
        <div class="p-2 w-full pt-2 text-center">
          <p>{msg1}</p>
          <p>{msg2}</p>
        </div>
      </div>
    </div>
  </div>
</section><Footer /></> : <div class={styles.container}>
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

export default Contact
