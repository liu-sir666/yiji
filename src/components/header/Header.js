import React, { Component } from 'react'
import './header.scss'
class Header extends Component {
  state = {}
  render() {
    const { showTanChuCeng } = this.props
    return (
      <header className="index-header">
        <span onClick={showTanChuCeng} />
      </header>
    )
  }
}

export default Header
