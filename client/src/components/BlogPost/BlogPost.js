import React from 'react'
import './blogpost.css'
import placeholder from '../images/placeholder.png'

export default function BlogPost({ title, author, image, story, date }) {
  return (
    <>
      <div className="blogPost">
        <div className="postTitle">{title}</div>
        <div className="postAuthor">Author: {author}</div>
        <img
          src={placeholder}
          alt={`${placeholder} header`}
          className="blogImage"
        />
        <div className="blogStory">{story}</div>
        <div>{date}</div>
      </div>
    </>
  )
}
