import React from 'react'
import './blogpost.css'
import placeholder from '../images/placeholder.png'

export default function BlogPost(props) {
  return (
    <>
      <div className="blogPost">
        <div className="postTitle">{props.title}</div>
        <div className="postAuthor">Author: {props.author}</div>
        <img
          src={props.image_url}
          alt={`${placeholder} header`}
          className="blogImage"
        />
        <div className="blogStory">{props.content}</div>
        <div>{props.date}</div>
      </div>
    </>
  )
}
