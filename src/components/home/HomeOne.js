import React, { Component } from 'react'
import ContentList from '../content/ContentList'
import Header from '../header/Header'
import { connect } from 'react-redux'
class HomeOne extends Component {
  state = {
    tanChuCeng: false
  }
  showTanChuCeng = () => {
    this.setState({
      tanChuCeng: true
    })
  }

  render() {
    const contentList = this.props.otherPost
    const contentList2 = this.props.otherPost2

    const imgSrc1 =
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u300.jpg'
    const imgSrc2 =
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u302.jpg'
    const { tanChuCeng } = this.state
    return (
      <div className="content ">
        <Header showTanChuCeng={this.showTanChuCeng} />
        <div className="home-list">
          <ContentList
            imgSrc1={imgSrc1}
            imgSrc2={imgSrc2}
            contentList={contentList}
            contentList2={contentList2}
          />
        </div>
        <div style={{ left: tanChuCeng ? 0 : '100%' }} className="tanChuCeng">
          <div className="tanChuCengTop">
            <label htmlFor="1">
              <span className="iconfont icon-sousuo"></span>
            </label>
            <input type="text" id="1" placeholder="请输入搜索内容" />
            <span
              onClick={() => this.setState({ tanChuCeng: false })}
              className="iconfont icon-cross"
            ></span>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    otherPost: state.otherPost,
    otherPost2: state.otherPost2
  }
}
export default connect(mapStateToProps)(HomeOne)
