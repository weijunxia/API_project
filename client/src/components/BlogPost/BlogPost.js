import React from 'react'
import './blogpost.css'
import placeholder from '../images/placeholder.png'

export default function BlogPost() {
  return (
    <div className="blog-post">
      <div className="blog-post-image-container">
        <img
          src={placeholder}
          alt={`${placeholder} header`}
          className="blog-image"
        />
      </div>
      <div className="blog-post-text-container">
        <h1 className="post-title">Deez Lorems Fyre Festa sadfasldfkjasf</h1>
        <div className="post-author">Written by Wei Jun Xia</div>
        <div className="blog-story">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis pellentesque purus vel luctus. Aenean sit amet lacus arcu. In
          rutrum, nisi vitae maximus lacinia, nisl ex consequat ante, in mattis
          ipsum ex sit amet orci. Vivamus dignissim ut mi commodo ornare.
          Phasellus iaculis augue non dictum tincidunt. Sed fermentum suscipit
          eleifend.
        </div>
      </div>
    </div>
  )
}
