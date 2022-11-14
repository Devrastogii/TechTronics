import React, { useEffect, useState } from 'react'
import styles from '../../styles/Card.module.css';
import style from '../../styles/Product.module.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Paytm() {

    const [bool, setBool] = useState(false);

    useEffect(()=>{
      setInterval(() => {
        setBool(true);
      }, 1000);
    },[])

    const [color, setColor] = useState("bg-indigo-500");
    const [hover, sethover] = useState("bg-indigo-600");
    const [confirm, getConfirm] = useState("");
    const [loading, setLoading] = useState("Pay Now");
    const [error, setError] = useState("");
    const [info, getInfo] = useState({
        cnum: "",       
    })
    const [disable, get] = useState(false);

    function validate(e){
       const val = e.target.value;
       const name = e.target.name;

       getInfo((currItem) => {
        return {
            ...currItem,
            [name]: val
       }})
    }

    function change(e){
        e.preventDefault();
        if(info.cnum === ""){
            setError("** Please fill your upi id correctly in proper form");
        }
        else {       
            get(true);
            setLoading("Wait while we confirm your payment...")
            setError("");  
            setTimeout(() => {
                setColor("bg-emerald-500");
                sethover("bg-emerald-600");
                getConfirm("We have received your order and it will be delivered to you in 2 days");
                setLoading("Paid Successfully");
            }, 2000); 
        }            
    }

  return (

    <>

    {bool ? <> <Navbar />
    <div className={`cover w-full ${styles.body} flex justify-center items-center`}>
             <div className="card w-3/5 bg-gradient-to-r from-zinc-200 to-zinc-300 drop-shadow-lg mt-10 mb-10">           
                 <div className="img flex justify-center mt-12">
                     <img src="/paytm.png" alt="" className='w-24'/>
                    </div>
                 <div className='grid grid-cols-2 mt-10 pl-16'>
                     <div><p className='mt-8 font-semibold'>UPI Id</p>
                 <p className='text-gray-500 text-sm'>Enter your upi id in proper form</p></div>
                     <div style={{marginLeft: '-2rem'}}><input type="text" autoComplete='of' name="cnum" class="mt-5 bg-[url('/paytm.png')] bg-no-repeat bg-left bg-[length:30px_30px] bg-zinc-100 rounded border border-gray-300 pl-12 w-60 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate} disabled={disable} placeholder='Mobilenumber@upi'></input></div>
                     </div>                             
                     <div className='text-center'><button class={`text-white mt-10 mb-3 ${color} border-0 w-72 py-2 px-6 hover:${hover} focus:outline-none rounded text-l`} onClick={change} disabled = {disable}>{loading}</button><p className='text-zinc-700'>{confirm}</p><p className='text-red-500 mb-12'>{error}</p></div>                           
                 </div>
             </div><Footer /></> : <div class={style.container}>
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

export default Paytm
