import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import Footer from './components/Footer/Footer'
import CreatePost from './components/CreatePost/CreatePost'
// styling
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <div className="postFeed">
          <PostFeed />
        </div>
        <Footer />
        <CreatePost />
      </main>
    </div>
  )
}

export default App
