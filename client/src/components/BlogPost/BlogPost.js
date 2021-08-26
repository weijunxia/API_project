import React from 'react'
import placeholder from '../images/placeholder.png'
import './blogpost.css'

export default function BlogPost() {
  return (
    <div className="blogPost">
      <div className="postTitle">Deez</div>
      <div className="postAuthor">Author: Wei</div>
      <img
        src={placeholder}
        alt={`${placeholder} header`}
        className="blogImage"
      />
      <div className="blogStory">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        mollis pellentesque purus vel luctus. Aenean sit amet lacus arcu. In
        rutrum, nisi vitae maximus lacinia, nisl ex consequat ante, in mattis
        ipsum ex sit amet orci. Vivamus dignissim ut mi commodo ornare.
        Phasellus iaculis augue non dictum tincidunt. Sed fermentum suscipit
        eleifend.
      </div>
    </div>
  )
}
