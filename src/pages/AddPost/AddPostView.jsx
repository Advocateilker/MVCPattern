

const AddPostView = ({ handleSubmit, onInputChange }) => {



  return (
    <form onSubmit={handleSubmit}>

      <h2>Add New Post</h2>
      <fieldset>
        <label htmlFor="userName">User's Name</label>
        <input
          onChange={(e) => onInputChange("user", e.target.value)}

          type="text" id='userName' placeholder='David Walker' />
      </fieldset>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => onInputChange("title", e.target.value)}
          type="text" id='title' placeholder='MVC Pattern' />
      </fieldset>
      <fieldset>
        <label htmlFor="explanation">Explanation</label>
        <textarea
          onChange={(e) => onInputChange("text", e.target.value)}
          maxLength={'100'} id="explanation" type="text" placeholder='Write your post' ></textarea>
      </fieldset>

      <button>SEND</button>


    </form>
  )
}

export default AddPostView