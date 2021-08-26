import React from 'react'
// Components
import NavBar from './components/NavBar/NavBar'
import BlogpPost from './components/BlogPost/BlogPost'
// styling
import './App.css'

// hooks

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <BlogpPost />
      </div>
    </>
  )
}

export default App
