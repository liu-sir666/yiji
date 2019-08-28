import React, { Component } from 'react'
import './title.scss'

class Title extends Component {
  state = {}
  render() {
    const { text, show } = this.props
    return (
      // 提示框
      <div className="tip">
        <span
          className="tipOne"
          style={{
            borderTopLeftRadius: show === 1 ? '30px' : 0,
            borderBottomLeftRadius: show === 1 ? '30px' : 0,

            borderTopRightRadius: show === 2 ? '30px' : 0,
            borderBottomRightRadius: show === 2 ? '30px' : 0,
            background: text ? 'rgb(185, 48, 48)' : ' rgb(31, 29, 29)'
          }}
        >
          {show === 1 ? (text ? '剩余' + text + '天' : '已结束') : text}
        </span>
        {/* <div
          className="tipOne"
          style={{ display: show === 2 ? 'block' : 'none' }}
        >
          {text}
        </div> */}
      </div>
    )
  }
}

export default Title
