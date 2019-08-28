import { Like } from '../actionType'

const initial = [
  {
    id: '31',
    isLike: false,
    isLikeNum: ['1', '2', '3', '4'],
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u62.jpg',
    share: false, //分享
    diTu: '', //地图,
    pingLun: [
      {
        id: '21',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      },
      {
        id: '22',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      }
    ], //评论
    postList: {
      beiJingTu:
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_01.jpg',
      zhanLan: '展览内容',
      authorPic: '', //作者图片
      authorInfo: '作者介绍',
      workShow: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_05.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_07.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_09.jpg'
      ] //作品展示
    }
  },
  {
    id: '32',
    isLike: false,
    isLikeNum: ['1', '2', '3', '4'],
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u65.jpg',
    share: false, //分享
    diTu: '', //地图,
    pingLun: [
      {
        id: '21',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      },
      {
        id: '22',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      }
    ], //评论
    postList: {
      beiJingTu:
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_01.jpg',
      zhanLan: '展览内容',
      authorPic: '', //作者图片
      authorInfo: '作者介绍',
      workShow: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_05.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_07.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_09.jpg'
      ] //作品展示
    }
  },
  {
    id: '33',
    isLike: false,
    isLikeNum: ['1', '2', '3', '4'],
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u68.jpg',
    share: false, //分享
    diTu: '', //地图,
    pingLun: [
      {
        id: '21',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      },
      {
        id: '22',
        comment: '评论1',
        _userImg:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg'
      }
    ], //评论
    postList: {
      beiJingTu:
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_01.jpg',
      zhanLan: '展览内容',
      authorPic: '', //作者图片
      authorInfo: '作者介绍',
      workShow: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_05.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_07.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_09.jpg'
      ] //作品展示
    }
  }
]

export default (state = initial, action) => {
  const newState = [...state]
  switch (action.type) {
    case Like:
      if (newState.find(ele => ele.id === action.id)) {
        newState.find(ele => ele.id === action.id).isLike = !newState.find(
          ele => ele.id === action.id
        ).isLike
        newState.find(ele => ele.id === action.id).isLikeNum.push(action.id)
        return newState
      } else {
        return state
      }
    default:
      return state
  }
}
