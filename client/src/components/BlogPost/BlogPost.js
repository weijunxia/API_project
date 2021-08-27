import React from 'react'
import './blogpost.css'
import placeholder from '../images/placeholder.png'

export default function BlogPost(props) {
  return (
    <div className="blogPost">
      <div
        className="postImageContainer"
        style={{ backgroundImage: `url(${props.image_url})` }}
      ></div>
      <div className="postContentContainer">
        <div className="postTitle">{props.title}</div>
        <div className="postAuthor">Author: {props.author}</div>
        <div className="blogStory">{props.content}</div>
        <div>{props.date}</div>
      </div>
    </div>
  )
}
