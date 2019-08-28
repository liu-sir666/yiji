import { Like } from '../actionType'

const initial = [
  {
    id: '21',
    time: 10, //剩余天数
    isLikeNum: ['1', '2', '3', '4'], //已经关注的数量
    isLike: true, //是否已经关注
    // 首页的图片
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_01.jpg',
    share: false, //分享
    diTu:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u206.jpg', //地图,
    pingLun: [
      //评论
      {
        id: '21',
        comment: '评论1',
        _userImg: ''
      },
      {
        id: '22',
        comment: '评论1',
        _userImg: ''
      }
    ],
    // 详情页的内容
    postList: {
      beiJingTu:
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_01.jpg',
      zhanLan:
        '生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；生活如歌，或高昂，或低沉，因为守信，它变得悦耳； 生活如画，或明丽，或素雅，因为诚信，它变得美丽',
      authorPic:
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_03.jpg', //作者图片
      authorInfo:
        '作者xxx，长着一双杏核眼，一双柳叶眉，但唯一让我感到不满意的是左眼角有一个疤。我有两大缺点和一大优点，那就先说说我的缺点吧！你们可不要笑话我哟！', //作者介绍

      workShow: [
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_05.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_07.jpg',
        'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u194_09.jpg'
      ] //作品展示
    }
  },
  {
    id: '22',
    time: 10, //剩余天数
    isLikeNum: ['1', '2', '3', '4'], //已经关注的数量
    isLike: false,
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_03.jpg',
    share: false, //分享
    diTu:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u206.jpg', //地图,
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
    id: '23',
    time: 12, //剩余天数
    isLikeNum: ['1', '2', '3', '4'], //已经关注的数量
    isLike: false,
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_05.jpg',
    share: false, //分享
    diTu:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u206.jpg', //地图,
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
    id: '24',
    time: 0, //剩余天数
    isLikeNum: ['1', '2', '3', '4'], //已经关注的数量
    isLike: false,
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_07.jpg',
    share: false, //分享
    diTu:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u206.jpg', //地图,
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
    id: '25',
    time: 8, //剩余天数
    isLikeNum: ['1', '2', '3', '4'], //已经关注的数量
    isLike: false,
    postSrc:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_09.jpg',
    share: false, //分享
    diTu:
      'https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u206.jpg', //地图,
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
