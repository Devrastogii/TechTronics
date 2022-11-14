import React from 'react'

function WishPage(props) {
  return (
    <>
        <div className="note">
            <div className="text">
                <h1>{props.title}</h1> <hr />
                <p>{props.comment}</p> <br />
                <button className="btn" onClick={() => {props.del(props.id)}}>
                </button>
            </div>
            </div>
    </>
  )
}

export default WishPage;
