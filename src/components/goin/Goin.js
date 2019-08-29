import React, { Component } from 'react'
import { connect } from 'react-redux'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './goin.scss'
class Goin extends Component {
  state = {
    val1: '',
    val2: '',
    show: false
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: false //循环
    })
  }

  login = () => {
    const { val1, val2, show } = this.state

    if (val1 === '1' && val2 === '2') {
      this.props.history.push('/home')
    } else {
      this.setState({
        val1: '',
        val2: '',
        show: !show
      })
    }
  }
  render() {
    const { val1, val2, show } = this.state
    const pics = this.props.goin
    console.log(this.props)

    return (
      <div className="loop-pic">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {pics
              ? pics.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              : '请稍等。。。'}
            <div className="swiper-slide shouji">
              <span className="cur-time">
                {new Date().getFullYear()}-{new Date().getMonth() + 1}-
                {new Date().getDate()}
              </span>
              <span>今日推送 >></span>
            </div>
            <div className="swiper-slide login">
              <div className="login-form">
                <input
                  value={val1}
                  onChange={event =>
                    this.setState({
                      val1: event.target.value
                    })
                  }
                  type="text"
                  placeholder="点击输入手机号登录"
                />
                <input
                  value={val2}
                  onChange={event =>
                    this.setState({
                      val2: event.target.value
                    })
                  }
                  type="text"
                  placeholder="输入密码"
                />
                <p>
                  <button onClick={this.login}>
                    登录
                    {/* <Link to="/home">登录</Link> */}
                  </button>
                  <button>注册</button>
                </p>
              </div>
              <span className="login-text">
                <span className="checked">✔</span>
                <span>登录或注册即代表同意用户服务协议</span>
              </span>
              <div className="login-type">
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B5_03.png"
                    alt=""
                  />
                  <p> 微博</p>
                </span>
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B51_06.png"
                    alt=""
                  />
                  <p>微信</p>
                </span>
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B51_03.png"
                    alt=""
                  />
                  <p>QQ</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: show ? 'flex' : 'none' }} className="loginErr">
          <div>
            <span>请输入正确用户名、密码！</span>
            <span
              onClick={() =>
                this.setState({
                  show: !show
                })
              }
            >
              确定
            </span>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToprops = state => {
  return {
    goin: state.goin
  }
}
export default connect(mapStateToprops)(Goin)
