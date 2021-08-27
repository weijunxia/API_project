import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './postfeed.css'

function PostFeed(props) {
  return (
    <div className="postFeedContainer">
      {props.posts.map((post) => (
        <BlogPost {...post} />
      ))}
      {/* <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost /> */}
    </div>
  )
}
export default PostFeed
