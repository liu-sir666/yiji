import React, { Component } from 'react'
import './home.scss'
class HomeTwo extends Component {
  state = {}
  render() {
    return (
      <div className="homeTwo">
        <div className="homeTwo-top">
          <div>
            <span />
            <span>上传图片</span>
            <span className="iconfont icon-feiji feiji" />
          </div>
        </div>
        <div className="homeTwo-content">
          <textarea className="homeTwo-txa" placeholder="说点啥？" />
          <div className="addPic">
            <span className="iconfont icon-ziyuan ziyuan" />
          </div>
          <div className="homeTwo-content-xiangji">
            <span className="iconfont icon-xiangji xiangji" />
          </div>
          <div className="getaddress">
            <span
              className="iconfont icon-danseshixintubiao-
"
            >
              获取位置
            </span>

            <span className="iconfont icon-tag-fill">添加标签</span>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeTwo
