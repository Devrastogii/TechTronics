import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../../styles/Product.module.css';

function Account() {

  const [bool, setBool] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 2000);
  },[])

  const [disable, set] = useState(true);
  const [name, setName] = useState("Edit");
  const [val, setVal] = useState({
    fname: "Dev",
    lname: "Rastogi",
    date: "2003-04-28",
    phone: "9987654321",
    email: "dev@gmail.com"
  });
  
  function edit(e){
    e.preventDefault();
    set(!disable);
    if(!disable === true){
      setName("Edit");
    }
    else {
      setName("Save Changes");
    }
  }

  function track(e){
    const val = e.target.value; 
    const name = e.target.name; 

    setVal((currItem) => {
      return {
        ...currItem,
        [name]: val
        }
    })
  }

  return (
    <>
    {bool ? <><Navbar />
      <div className="w-full h-full bg-gray-200 flex justify-center items-center">
        <div className="w-11/12 bg-white h-3/5 p-8">
          <h1 className='text-2xl font-semibold'>My Details</h1>
          <h1 className='mt-7 font-medium'>Personal Information</h1>
          <hr />
          <div className="grid_div grid grid-cols-3 mt-5 ">
          <div className='text-justify'>This section contains all your personal<br />details that you filled during sign in<br /> You can change them later <br /> </div>
          <div><h1>First Name</h1>
          <input type="text" name="fname" onChange={track} autoComplete="of" className='border-gray-200 bg-gray-100 border rounded h-10 p-2 mt-1' placeholder='Enter your first name' value={val.fname} disabled={disable}/>
          <h1 className='mt-6'>Birthday</h1>
          <input type="date" name="date" onChange={track} autoComplete="of" className='border-gray-200 bg-gray-100 border rounded h-10 p-2 mt-1' placeholder='Enter your birth date' value={val.date} disabled={disable}/>
          <h1 className='mt-6'>Mobile Number</h1>
          <input type="phone" name="phone" onChange={track} autoComplete="of" className='border-gray-200 bg-gray-100 border rounded h-10 p-2 mt-1' placeholder='Enter your phone number' value={val.phone} disabled={disable}/>
          <br /><button className='mt-8 bg-indigo-600 w-28 h-8 mb-8 text-white hover:bg-indigo-800 rounded' onClick={edit}>{name}</button>
          </div>
          <div><h1>Last Name</h1>
          <input type="text" name = "lname" onChange={track} autoComplete="of" className='border-gray-200 bg-gray-100 border rounded h-10 p-2 mt-1' placeholder='Enter your last name' value={val.lname} disabled={disable}/></div>
          </div>
          <h1 className='mt-7 font-medium'>Email Information</h1>
          <hr />
          <div className="grid_div grid grid-cols-3 mt-5 ">
          <div className='text-justify'>This section contains your email<br />details that you filled during sign in<br /> You can change them later <br /> </div>
          <div><h1>Email</h1>
          <input type="email" name='email' onChange={track} className='border-gray-200 bg-gray-100 border rounded h-10 p-2 mt-1' placeholder='Enter your email' value="dev@gmail.com" disabled={disable}/>          
          <br /><button className='mt-8 bg-indigo-600 w-28 h-8 mb-8 text-white hover:bg-indigo-800 rounded' onClick={edit}>{name}</button>
          </div>          
          </div>
        </div>
      </div>
      <Footer /> </> : <><div class={styles.container}>
  <div class={styles.loadingspinner}>
    <div id={styles.square1}></div>
    <div id={styles.square2}></div>
    <div id={styles.square3}></div>
    <div id={styles.square4}></div>
    <div id={styles.square5}></div>
  </div>
</div>
</>}    
    </>
  )
}

export default Account
