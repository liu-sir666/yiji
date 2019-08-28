import React, { Component } from 'react'
import './ContentList.scss'
import { Link } from 'react-router-dom'
import Title from '../title/Title'
class ContentList extends Component {
  state = {
    showListImg1: true,
    showListImg2: false,
    titleShow: 1
  }
  showList = () => {
    this.setState({
      showListImg1: !this.state.showListImg1,
      showListImg2: !this.state.showListImg2
    })
  }
  render() {
    const { showListImg1 } = this.state
    const { showListImg2, titleShow } = this.state
    const { contentList, contentList2, imgSrc1, imgSrc2 } = this.props
    const showList = contentList.map((item, index) => (
      <Link key={index} to={`/post/${item.id}`}>
        <div
          className="showlist"
          style={{ backgroundImage: `url(${item.postSrc})` }}
        >
          <div className="titleTime">
            <Title text={item.time} show={titleShow} />
          </div>
          <div className="showlist-bot-text">
            <span className="iconfont icon-zhuanfa" />
            <span className="icon">
              <span
                className={
                  item.isLike
                    ? 'iconfont icon-xin isLike '
                    : 'iconfont icon-xin '
                }
              />
              <span>{item.isLikeNum.length}</span>
              <span className="iconfont icon-yanjing" />
              <span>222</span>
              <span className="iconfont icon-xiaoxi" />
              <span>333</span>
            </span>
          </div>
        </div>
      </Link>
    ))
    const showList2 = contentList2.map((item, index) => (
      <div
        className="showlist"
        style={{ backgroundImage: `url(${item.postSrc})` }}
        key={index}
      >
        <div className="titleTime">
          <Title text={item.time} show={titleShow} />
        </div>
        <div className="showlist-bot-text">
          <span className="iconfont icon-zhuanfa" />
          <span className="icon">
            <span className="iconfont icon-xin isLike " />
            <span>11</span>
            <span className="iconfont icon-yanjing" />
            <span>222</span>
            <span className="iconfont icon-xiaoxi" />
            <span>333</span>
          </span>
        </div>
      </div>
    ))
    return (
      <div>
        <div className="content-top">
          <img
            style={{ display: showListImg1 ? 'block' : 'none' }}
            src={imgSrc1}
            alt=""
          />
          <img
            style={{ display: showListImg2 ? 'block' : 'none' }}
            src={imgSrc2}
            alt=""
          />
          <div className="btn-wrap">
            <span onClick={this.showList} />
            <span onClick={this.showList} />
          </div>
        </div>

        <div className="list-wrap">
          <div
            className="list-box"
            style={{
              marginLeft: showListImg1 ? '0' : '-100%'
            }}
          >
            <div className="content-list">
              <div className="content-list-wrap">{showList}</div>
            </div>
            <div className="content-list">
              <div className="content-list-wrap">{showList2}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentList
