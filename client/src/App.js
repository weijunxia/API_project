import React from 'react'
// Components
import NavBar from './components/NavBar/NavBar'
import PostFeed from './components/PostFeed/PostFeed'
import Banner from './components/Banner/Banner'
import CreatePost from './components/CreatePost/CreatePost'
// styling
import './App.css'

// hooks

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <div className="postFeed">
          <PostFeed />
        </div>
        <CreatePost />
      </div>
    </>
  )
}

export default App
