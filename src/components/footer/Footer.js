import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
class Footer extends Component {
  state = {}
  render() {
    return (
      <footer>
        <NavLink exact activeClassName="active" to="/home">
          <span className="iconfont icon-tag-fill">
            <span>展讯</span>
          </span>
        </NavLink>

        <NavLink activeClassName="active" to="/home/homeOne">
          <span className="iconfont icon-tupian">
            <span>推荐</span>
          </span>
        </NavLink>
        <NavLink activeClassName="active" to="/home/homeTow">
          <span className="iconfont icon-feiji">
            <span>发布</span>
          </span>
        </NavLink>
        <NavLink activeClassName="active" to="/home/homeThree">
          <span className="iconfont icon-geren">
            <span>个人</span>
          </span>
        </NavLink>
      </footer>
    )
  }
}

export default Footer
