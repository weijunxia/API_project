import React from 'react'
// Components
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import Footer from './components/Footer/Footer'
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
        <Footer />
      </div>
    </>
  )
}

export default App
