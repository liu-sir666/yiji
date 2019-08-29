import React, { Component } from 'react'
import { connect } from 'react-redux'
import './post.scss'
import Title from '../title/Title'
import { focus, addComment } from '../../store/action'
class Post extends Component {
  state = {
    titleShow: 2,
    diTuCeng: false,
    fenXiangCeng: false,
    pinLunCeng: false,
    val: '',
    num: 2,
    show: true
  }
  addcomment = (e, postId) => {
    const { val } = this.state
    if (e.keyCode === 13) {
      if (val.trim()) {
        this.props.addComment(
          {
            postId,
            id: new Date().getTime(),
            comment: val,
            _userImg:
              'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
          },
          this.clear
        )
        console.log(postId)
      }
    }
  }
  clear = () => {
    console.log(2222222)

    this.setState({
      val: ''
    })
  }
  render() {
    // console.log(this.props)
    const { focus } = this.props
    const { num, show, val } = this.state
    const postId = this.props.match.params.id

    const { post, post2, otherPost, otherPost2 } = this.props
    const postItem =
      post.find(ele => ele.id === postId) ||
      post2.find(ele => ele.id === postId) ||
      otherPost.find(ele => ele.id === postId) ||
      otherPost2.find(ele => ele.id === postId)
    const { titleShow, diTuCeng, fenXiangCeng, pinLunCeng } = this.state
    // console.log(postItem.diTu)
    const CommentArr = [...postItem.pingLun]
    const newCommentArr = CommentArr.splice(0, num)
    return (
      <div className="userInfo">
        {/* 返回 */}
        <span
          onClick={() => {
            this.props.history.goBack()
          }}
          className="fanHui"
        >
          {'<'}
        </span>
        {/* 有背景的顶部 */}
        <div className="userInfoTop">
          <div className="beiJingCeng">
            <img src={postItem.postSrc} alt="" />
          </div>
          {/* <h3 className="authorName"></h3> */}
        </div>
        {/* 内容展示 */}
        <div className="userInfoMiddle">
          <div className="title">
            <Title text="内容展示" show={titleShow} />
          </div>
          <p className="showInner">{postItem.postList.zhanLan}</p>
          {/* 作者介绍 */}
          <div className="authorInfo">
            <div className="zuoZhe">
              <Title text="作者介绍" show={titleShow} />
            </div>
            <img src={postItem.postList.authorPic} alt="" />
            <p>{postItem.postList.authorInfo}</p>
          </div>
          {/* 作品展示 */}
          <div className="showWorks">
            <div className="worksTip">
              <Title text="作品展示" show={titleShow} />
            </div>
            {postItem.postList.workShow.map((ele, index) => (
              <img key={index} src={ele} alt="" />
            ))}
          </div>
        </div>
        {/* 评论部分 */}
        <div className="pingLun">
          <div className="pingLunTip">
            <Title text="展览评论" show={titleShow} />
          </div>
          <ul className="pingLunList">
            {newCommentArr.map(ele => (
              <li key={ele.id}>
                <img src={ele._userImg} alt="" />
                <span>{ele.comment}</span>
              </li>
            ))}
          </ul>
          <p
            onClick={() =>
              this.setState({
                num: postItem.pingLun.length,
                show: !show
              })
            }
            style={{ display: show ? 'block' : 'none' }}
          >
            展示更多
          </p>
          <p
            onClick={() =>
              this.setState({
                num: 2,
                show: !show
              })
            }
            style={{ display: show ? 'none' : 'block' }}
          >
            收起
          </p>
        </div>
        <div className="userInfoFoot">
          {/* 最底下 */}
          <span
            onClick={() => {
              focus({ postId, id: '666' })
            }}
          >
            <span
              className={
                postItem.isLike
                  ? 'iconfont icon-xin islike'
                  : 'iconfont icon-xin'
              }
            ></span>
            <span>关注</span>
          </span>
          <span
            onClick={() =>
              this.setState({
                diTuCeng: !diTuCeng
              })
            }
          >
            <span className="iconfont icon-luxian"></span>
            <span>到这</span>
          </span>
          <span
            onClick={() =>
              this.setState({
                fenXiangCeng: !fenXiangCeng
              })
            }
          >
            <span className="iconfont icon-zhuanfa"></span>
            <span>分享</span>
          </span>
          <span
            onClick={() =>
              this.setState({
                pinLunCeng: !pinLunCeng
              })
            }
          >
            <span className="iconfont icon-xiaoxi"></span>
            <span>评论</span>
          </span>
        </div>
        {/* 地图 */}
        <div className="diTuCeng" style={{ left: diTuCeng ? '0' : '100%' }}>
          <span
            onClick={() =>
              this.setState({
                diTuCeng: !diTuCeng
              })
            }
          >
            {'<'}
          </span>
          <img src={postItem.diTu} alt="" />
        </div>
        {/* 分享 */}
        <div className="share" style={{ bottom: fenXiangCeng ? '0' : '-37%' }}>
          <h3>分享到</h3>
          <div className="shareTo">
            <span>
              <img
                src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u213_03.jpg"
                alt=""
              />
              <span>艺集</span>
            </span>
            <span>
              <img
                src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u213_05.jpg"
                alt=""
              />
              <span>微信</span>
            </span>
            <span>
              <img
                src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u213_07.jpg"
                alt=""
              />
              <span>微博</span>
            </span>
            <span>
              <img
                src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u213_09.jpg"
                alt=""
              />
              <span>QQ</span>
            </span>
          </div>
          <span
            onClick={() =>
              this.setState({
                fenXiangCeng: !fenXiangCeng
              })
            }
            className="quxiao"
          >
            取消
          </span>
        </div>
        {/* 评论 */}
        <div
          style={{ left: pinLunCeng ? '0' : '100%' }}
          className="pingLunCeng"
        >
          <div className="pingLunCengTop">
            <span
              onClick={() =>
                this.setState({
                  pinLunCeng: !pinLunCeng
                })
              }
            >
              {'<'}
            </span>
            <span>评论</span>
            <span className="iconfont icon-feiji "></span>
          </div>
          <textarea
            value={val}
            onKeyDown={event => {
              this.addcomment(event, postItem.id)
            }}
            onChange={event => {
              this.setState({
                val: event.target.value
              })
            }}
            placeholder="说点什么"
            className="shuRuKuang"
          ></textarea>
          <div className="pingLunCengIcon">
            <span className="iconfont icon-xiangji"></span>
            <span className="iconfont icon-tupian"></span>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  // console.log(state)

  return {
    post: state.post,
    post2: state.post2,
    otherPost: state.otherPost,
    otherPost2: state.otherPost2
  }
}
export default connect(
  mapStateToProps,
  { focus, addComment }
)(Post)
