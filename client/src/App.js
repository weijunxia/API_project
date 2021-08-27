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
import Privacy from './components/Footer/Privacy'
import Authors from './components/Footer/Authors'
import Profile from './pages/Profile'
import Support from './components/Footer/Support'
import BASE_URL from '../src/pages/global'

// styling
import './App.css'

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
      <main>
        <Switch>
          <Route exact path="/">
            <Banner />
            <PostFeed posts={posts} />
          </Route>
          <Route exact path="/newpost">
            <Banner />
            <CreatePost posts={posts} setPosts={setPosts} />
          </Route>
          <Route exact path="/profile">
            <Banner />
            <Profile />
          </Route>
        </Switch>
      </main>
      <footer>
        <Switch>
          <Route exact path="/about">
            <Banner />
            <About />
          </Route>
          <Route exact path="/help">
            <Banner />
            <Help />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/authors">
            <Banner />
            <Authors />
          </Route>
          <Route exact path="/support">
            <Banner />
            <Support />
          </Route>
        </Switch>
      </footer>
      <Footer />
    </div>
  )
}

export default App
