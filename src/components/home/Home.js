import React, { Component } from 'react'

import Footer from '../footer/Footer'
import Content from '../content/Content'
import { Route } from 'react-router-dom'
import './home.scss'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeThree from './HomeThree'
class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <div>
          <Route exact path="/home" component={Content} />
          <Route path="/home/homeOne" component={HomeOne} />
          <Route path="/home/homeTow" component={HomeTwo} />
          <Route path="/home/homeThree" component={HomeThree} />
        </div>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default Home
