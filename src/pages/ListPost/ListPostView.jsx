import PopUpController from "../../components/PopUp/PopUpController"


const ListPostView = ({ postData, showPopup, setShowPopup, setUserName, userName }) => {

  return (
    <div className='container'>

      {postData.map((post) => (
        <div key={post.id} className='post'>
          <div className='info'>
            <h3>{post.title}</h3>
            <p style={{ cursor: "pointer" }}
              onClick={() => {
                setShowPopup(true);
                setUserName(post.user)
              }}>{post.user}</p>
          </div>
          <p className='text'>{post.text}</p>
        </div>
      ))}



      {showPopup && (<PopUpController postData={postData} userName={userName} setShowPopup={setShowPopup} />)}


    </div>
  )
}

export default ListPostView