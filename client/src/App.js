import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import './App.css'

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
