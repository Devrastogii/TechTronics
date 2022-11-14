import Link from 'next/link';
import React, { useState } from 'react'
import styles from '../../styles/Sign.module.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Forget() {
   
    const [loading, setLoading] = useState("Send Verification Link");   
    const [bool, getBool] = useState(false);
    const [home, getHome] = useState(false);
    const [disable, get] = useState(false);
    const [err, seterr] = useState("");
    const [mail, setmail] = useState({
        email: ""
    });

    function track(e){
        setmail(e.target.value);
    }

    function checkReq(e){
        e.preventDefault();
        if(mail.email == ""){
            seterr("** Mail can't be blank or incorrect");
            getBool(true);
            return false;
        }
        else{
          setLoading("Wait while fetching details...");  
          getBool(false);
          get(true);      
          setTimeout(() => {
            setLoading("Verification Link Sent");    
            getHome(true);        
          }, 2000);  
        }
    }

  return (
    <>
    <Navbar />
       <div className={`flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${styles.wrapper}`} style={{height: "30rem"}}>
        <div className="w-full max-w-md space-y-8">
          <div>           
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot Password
            </h2>           
          </div>
          <form className="mt-8 space-y-6">           
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="of"
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"   
                  onChange={track}       
                  disabled={disable}      
                />
              </div>
              {bool && <div className="flex justify-center items-center">
            <p className="text-sm bg-white text-black w-60 h-8 rounded flex justify-center items-center">{err}</p>
            </div>}          
              <button             
                className={`relative flex w-full justify-center rounded-md border-none bg-zinc-700 py-2 px-4 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2`} onClick={checkReq} disabled={disable}>              
                {loading}
              </button> 
              {home && <div className="flex justify-center items-center"><Link href={'/components/Login'}><button             
                className={`relative flex justify-center rounded-md border-none bg-slate-200 py-2 px-4 text-sm font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2`}>              
                Log In
              </button></Link></div>}                                
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Forget