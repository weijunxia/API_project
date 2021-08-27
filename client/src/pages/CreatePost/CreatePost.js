import React, { useState } from 'react'
import axios from 'axios'
import './createpost.css'

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postImageURL, setPostImageURL] = useState('')
  const [postContent, setPostContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPostData = {
      title: postTitle,
      content: postContent,
      image_url: postImageURL
    }
    axios
      .post('http://localhost:3001/api/posts', newPostData)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="create-post-container">
      <form className="new-post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          className="post-title"
          onChange={(e) => setPostTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Image URL"
          className="post-image"
          onChange={(e) => setPostImageURL(e.target.value)}
        ></input>
        <textarea
          type="text"
          placeholder="Write away..."
          className="post-content"
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button type="submit" className="post-submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreatePost
