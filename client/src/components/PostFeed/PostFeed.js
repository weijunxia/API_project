import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './postfeed.css'

function PostFeed() {
  return (
    <div className="postFeedContainer">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  )
}
export default PostFeed
