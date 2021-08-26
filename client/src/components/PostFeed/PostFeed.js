import React from 'react'
import './postfeed.css'
import BlogPost from '../BlogPost/BlogPost'

function PostFeed() {
  return (
    <div className="postFeed">
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  )
}
export default PostFeed
