import React, { Component } from 'react'
import './content.scss'
import MySwiper from '../swiper/MySwiper'
import ContentList from './ContentList'
import Header from '../header/Header'
import { connect } from 'react-redux'

class Content extends Component {
  state = {
    tanChuCeng: false
  }
  showTanChuCeng = () => {
    this.setState({
      tanChuCeng: true
    })
  }
  render() {
    //  首页 轮播图以下 展示的内容
  

    const contentList = this.props.post
    const contentList2 = this.props.post2

   
    //轮播图
    const swiperone = {
      pics: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u62.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u65.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u68.jpg'
      ],
      autoplay: true,
      className: 'swiperone',
      pagination: {
        //分页器
        el: '.swiper-pagination',
        bulletActiveClass: 'active-silde-page'
      },
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      width: '100vw',
      spaceBetween: 0,
      initialSlide: 0,
      direction: 'horizontal'
    }
    const swipertwo = {
      pics: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/111.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205600.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205604.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205608.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205611.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205615.png'
      ],
      className: 'swipertwo',
      loop: true,
      autoplay: false,
      slidesPerView: 2.5,
      centeredSlides: true,
      pagination: '',
      width: 150,
      spaceBetween: 10,
      initialSlide: 1,
      direction: 'horizontal'
    }
    const imgSrc1 =
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u124.jpg'
    const imgSrc2 =
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u127.jpg'
    const { tanChuCeng } = this.state

    return (
      <div className="content">
        <Header showTanChuCeng={this.showTanChuCeng} />
        <div className="home-list">
          <MySwiper {...swiperone} />
          <MySwiper {...swipertwo} />
          <ContentList
            contentList={contentList}
            contentList2={contentList2}
            imgSrc1={imgSrc1}
            imgSrc2={imgSrc2}
          />
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
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    post: state.post,
    post2: state.post2
  }
}
export default connect(mapStateToProps)(Content)
