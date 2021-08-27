import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
// Components
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import Footer from './components/Footer/Footer'
import CreatePost from './pages/CreatePost/CreatePost'

// styling
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPost() {
      const res = await axios.get('http://localhost:3001/api/posts')
      setPosts(res.data.results)
    }
    getPost()
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Banner />
      <main>
        <Switch>
          <Route exact path="/">
            <PostFeed posts={posts} />
          </Route>
          <Route exact path="/NewPost">
            <CreatePost />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  )
}

export default App
