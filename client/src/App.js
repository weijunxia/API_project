import React from 'react'
// Components
import NavBar from './components/NavBar/NavBar'
import PostFeed from './components/PostFeed/PostFeed'
import Banner from './components/Banner/Banner'
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
      </div>
    </>
  )
}

export default App
