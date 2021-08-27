import React from 'react'
import './createpost.css'

const CreatePost = () => {
  return (
    <div className="create-post-container">
      <form className="new-post">
        <input
          type="text"
          placeholder="Post Title"
          className="post-title"
        ></input>
        <input
          type="text"
          placeholder="Image URL"
          className="post-image"
        ></input>
        <textarea
          type="text"
          placeholder="Write away..."
          className="post-content"
        ></textarea>
        <button type="submit" className="post-submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreatePost
