import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './postfeed.css'

function PostFeed(props) {
  return (
    <div className="postFeedContainer">
      {props.posts.map((post) => (
        <BlogPost key={post._id} {...post} />
      ))}
    </div>
  )
}
export default PostFeed
