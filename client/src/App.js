import React from 'react'
// Components
import NavBar from './components/NavBar/NavBar'
import BlogpPost from './components/BlogPost/BlogPost'
import PostFeed from './components/PostFeed/PostFeed'
// styling
import './App.css'

// hooks

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <PostFeed />
        <BlogpPost />
      </div>
    </>
  )
}

export default App
