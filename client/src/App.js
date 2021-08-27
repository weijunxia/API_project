import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Components
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import PostFeed from './components/PostFeed/PostFeed'
import Footer from './components/Footer/Footer'
import CreatePost from './pages/CreatePost/CreatePost'

// styling
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Banner />
      <main>
        <Switch>
          <Route exact path="/">
            <PostFeed />
          </Route>
          <Route exact path="/newpost">
            <CreatePost />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  )
}

export default App
