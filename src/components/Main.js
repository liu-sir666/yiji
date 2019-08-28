import React from 'react'
import { Route } from 'react-router-dom'

import Goin from './goin/Goin'
import Home from './home/Home'
import Post from './home/Post'
const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Goin} />
      <Route path="/home" component={Home} />
      <Route path="/post/:id" component={Post} />
    </div>
  )
}
export default Main
