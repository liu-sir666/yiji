import React, { Component } from 'react'
import './home.scss'
import MySwiper from '../swiper/MySwiper'
class HomeThree extends Component {
  state = {
    showListImg1: true,
    geRenCeng: false,
    setCeng: false,
    xiangCeCeng: false
  }
  showList = () => {
    this.setState({
      showListImg1: !this.state.showListImg1
    })
  }
  render() {
    const { showListImg1, geRenCeng, setCeng, xiangCeCeng } = this.state
    const swiperThree = {
      pics: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205608.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205611.png',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190822205615.png'
      ],
      // text: [
      //   {
      //     id: 1,
      //     txt: '订阅',
      //     num: 2
      //   },
      //   {
      //     id: 2,
      //     txt: '订阅',
      //     num: 2
      //   },
      //   {
      //     id: 3,
      //     txt: '订阅',
      //     num: 2
      //   }
      // ],
      className: 'swiperthree',
      loop: true,
      autoplay: false,
      slidesPerView: 2.5,
      centeredSlides: false,
      pagination: '',
      width: 150,
      spaceBetween: 10,
      initialSlide: 1,
      direction: 'horizontal'
    }
    return (
      //个人页
      <div className="homethree">
        <div className="homethreeTop">
          <span className="Set">
            <span
              onClick={() => {
                this.setState({
                  setCeng: !setCeng
                })
              }}
              className="iconfont icon-shezhi shezhi"
            />
          </span>
          <div className="user">
            <img
              onClick={() => {
                this.setState({
                  geRenCeng: !geRenCeng
                })
              }}
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg"
              alt=""
            />
            <h5 className="userName">阴雨天</h5>
            <p>
              <span>
                关注 <span>11</span>
              </span>
              <span>
                发布 <span>22</span>
              </span>
              <span>
                访客 <span>33</span>
              </span>
            </p>
          </div>
        </div>
        <div className="homethreeMiddle">
          <div className="middleTop">
            <span className="middleTopLeftText">艺象云集</span>
            <span className="middleTopRightText">All ></span>
          </div>
          <MySwiper {...swiperThree} />
        </div>
        <div className="homethreeFoot">
          <div className="footTop">
            <img
              src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_02.jpg"
              alt=""
            />
            <div className="btn-wrap">
              <span onClick={this.showList} />
              <span onClick={this.showList} />
            </div>
          </div>
          <div className="footBottomBox">
            <div
              className="footBottom"
              style={{
                transform: showListImg1 ? 'translateX(0)' : 'translateX(-50%)'
              }}
            >
              <div className="footBottomLeft">
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_01.jpg"
                  alt=""
                />
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_05.jpg"
                  alt=""
                />
              </div>
              <div className="footBottomRight">
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_05.jpg"
                  alt=""
                />
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* 个人设置 */}
        <div className="setInfo" style={{ left: geRenCeng ? '0' : '100%' }}>
          <div className="userSetTop">
            <span
              onClick={() => {
                this.setState({
                  geRenCeng: !geRenCeng
                })
              }}
            >
              {'<'}
            </span>
          </div>
          <div className="userSetMiddle">
            <ul>
              <li>
                <span>头像</span>
                <span
                  onClick={() =>
                    this.setState({
                      xiangCeCeng: !xiangCeCeng
                    })
                  }
                >
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg"
                    alt=""
                  />
                  <span>></span>
                </span>
              </li>
              <li>
                <span>背景</span>
                <span>
                  更换<span>></span>
                </span>
              </li>
              <li>
                <span>名字</span>
                <span>
                  更换<span>></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="userSetFoot">
            <ul>
              <li>
                <span>我的二维码</span>
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/weixin.jpg"
                    alt=""
                  />
                  <span>></span>
                </span>
              </li>
              <li>
                <span>我的地址</span>
                <span>
                  xxxxx
                  <span>></span>
                </span>
              </li>
              <li>
                <span>隐私</span>
                <span>
                  <span className="zhuYi">!</span>
                  <span>></span>
                </span>
              </li>
            </ul>
          </div>
          <div
            style={{ bottom: xiangCeCeng ? '0' : '-30%' }}
            className="xiangCe"
          >
            <span>
              <span>进入相册选择</span>
              <span>拍一张</span>
            </span>
            <span
              onClick={() =>
                this.setState({
                  xiangCeCeng: !xiangCeCeng
                })
              }
            >
              取消
            </span>
          </div>
          <div
            onClick={() =>
              this.setState({
                xiangCeCeng: !xiangCeCeng
              })
            }
            style={{ display: xiangCeCeng ? 'block' : 'none' }}
            className="mengCen"
          ></div>
        </div>
        {/* 设置部分 */}
        <div className="userSet" style={{ left: setCeng ? '0' : '100%' }}>
          <div className="userSetTop">
            <span
              onClick={() => {
                this.setState({
                  setCeng: !setCeng
                })
              }}
            >
              {'<'}
            </span>
          </div>
          <div className="userSetMiddle">
            <ul>
              <li>
                <span>自动离线缓存</span>
                <span>
                  <span className="open">开</span>/<span>关</span>
                </span>
              </li>
              <li>
                <span>Wi-fi状态下自动缓存高清作品</span>

                <span>></span>
              </li>
              <li>
                <span>使用流量状态下提醒</span>
                <span>
                  <span className="open">开</span>/<span>关</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="userSetFoot">
            <ul>
              <li>
                <span>消息推送</span>
              </li>
              <li>
                <span>意见反馈</span>
              </li>
              <li>
                <span>当前版本</span>
              </li>
              <li>
                <span>关于艺集</span>
              </li>
            </ul>
          </div>
          <div className="logOutBox">
            <span className="logOut">退出登录</span>
            <span>当前版本 1.0.42</span>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeThree
