import React from 'react'
import WishBtn from './WishBtn';
import WishPage from './WishPage';

function Wishlist() {

    const [setNote, showNote] = useState([]);

    function addNote(inputObj){
        showNote((prevData) => {
            return [...prevData , inputObj];
        })
    }

    function deleteNote(id){
        showNote((delNote) => {
            return delNote.filter((ele,index)=>{
                return index !== id;
            })
        })
    }

  return (
    <>

        <WishBtn addNote = {addNote}/>

        {setNote.map((val, index) => {
                return <WishPage 
                    key = {index}
                    id = {index}
                    title = {val.title}
                    comment = {val.comment}
                    del = {deleteNote}
                />
            })}
    </>
  )
}

export default Wishlist
