import React from 'react'

const PopUpView = ({ postData, setShowPopup, userName }) => {

  console.log(postData)

  const filtered = postData.filter((i) => i.user === userName)

  console.log(filtered)

  return (

    <div className='wrapper'>
      <div className="popup">
        <div className="btn-wrap">
          <h4>Posts by <span>{userName}</span></h4>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>

        {filtered.map((post) => (
          <div key={post.id}className='post'>
            
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>


        ))}

      </div>
    </div>

  )
}

export default PopUpView