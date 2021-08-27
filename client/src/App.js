import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
// Components
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import Footer from './components/Footer/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import About from './components/Footer/About'
import Help from './components/Footer/Help'

// styling
import './App.css'
import Privacy from './components/Footer/Privacy'
import Authors from './components/Footer/Authors'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPost() {
      const res = await axios.get('http://localhost:3001/api/posts')
      setPosts(res.data.results.reverse())
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
          <Route exact path="/newpost">
            <CreatePost posts={posts} setPosts={setPosts} />
          </Route>
        </Switch>
      </main>
      <footer>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/authors">
            <Authors />
          </Route>
        </Switch>
      </footer>
      <Footer />
    </div>
  )
}

export default App
