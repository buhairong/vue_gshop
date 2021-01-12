import Mock from 'mockjs'

// 有管理员权限的圈
let adminRooms = Mock.mock({
  'list|1-10': [{
    'roomid|1-1000': 1,
    'naturalname': '@cword(2, 5)'
  }]
})

//Mock.mock('/getAdminRooms', adminRooms.list)

// 所有的圈
let Rooms = Mock.mock({
  'list|1-10': [{
    'roomid|1-1000': 1,
    'naturalname': '@cword(2, 5)'
  }]
})

Mock.mock('/getRooms', Rooms.list)

// 获取省份
let AllProvince = Mock.mock({
  'list|1-10': [
    {
      'provinceId|1-1000': 1,
      'provinceName': '@province()'
    }]
})

//Mock.mock('/getProvince', AllProvince.list)

// 获取城市
let AllCity = Mock.mock({
  'list': [
    {
      'cityId': 1,
      'cityName': '就是你'
    }]
})

// Mock.mock(RegExp('/getCity' + ".*"), AllCity.list)

// 获取区县
let AllDistrict = Mock.mock({
  'list|1-10': [
    {
      'districtId|1-1000': 1,
      'districtName': '@county()'
    }]
})

// Mock.mock(RegExp('/getDistrict' + ".*"), AllDistrict.list)

// 发布活动
let SaveActivity = Mock.mock({
  "code": 0,
  "activityId|1-1000": 1
})

// Mock.mock(RegExp('/SaveActivity' + ".*"), SaveActivity)

// 修改活动
let UpdateActivity = Mock.mock({
  "code": 0
})

//Mock.mock(RegExp('/UpdateActivity' + ".*"), UpdateActivity)

// 发布文章
let saveArticle = Mock.mock({
  "code": 0,
  "activityId|1-1000": 1
})

//Mock.mock(RegExp('/saveArticle' + ".*"), saveArticle)

// 修改文章
let updateArticle = Mock.mock({
  "code": 0
})

//Mock.mock(RegExp('/updateArticle' + ".*"), updateArticle)

// 活动列表
let GetActivityList = Mock.mock({
  "totalNum|0-200": 1,
  "data|10": [
    {
      'id|1-1000': 1,
      'title': '@cword(5,40)',
      'roomName': '@cword(2, 5)',
      'userNick': '@cword(2, 20)',
      'createDate': '@DATETIME("yyyy-MM-dd")'
    }
  ]
})

//Mock.mock(RegExp('/getActivityList' + ".*"), GetActivityList)

// 获取活动列表供感悟发布使用
let GetActivitySentimentList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [
    {
      'id|1-1000': 1,
      'title': '@cword(2,10)',
      'createDate': '@DATETIME("yyyy-MM-dd")'
    }
  ]
})

Mock.mock(RegExp('/getActivitySentimentList' + '.*'), GetActivitySentimentList)

// 获取活动感悟列表
let GetReleaveSentimentList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'title': '@cword(2,10)',
    'site': '@cword(2,10)',
    'releaveTime': '@DATETIME("yyyy-MM-dd")'
  }]
})

Mock.mock(RegExp('/getReleaveSentimentList' + '.*'), GetReleaveSentimentList)

// 大文章详情（编辑页）
let getArticleDetail = Mock.mock({
  article: {
    'code': 0,
    'cover': 'http://mlyjq.com/bannar1.png',
    'roomId|1-1000': 1,
    'title': '@cword(5,40)',
    'content': '@cword(5,400)'
  }
})

//Mock.mock(RegExp('/getArticleDetail' + ".*"), getArticleDetail)

// 活动详情（编辑页）
let GetActivityDetail = Mock.mock({
  activity: {
    'code': 0,
    'cover': 'http://mlyjq.com/bannar1.png',
    'roomId|1-1000': 1,
    'title': '@cword(5,40)',
    'content': '@cword(5,400)',
    'isOnline': 2,
    'issignup': 1,
    'favorite': 2003,
    "startDate": '@DATETIME("yyyy-MM-dd HH:mm:ss")',
    "endDate": '@DATETIME("yyyy-MM-dd HH:mm:ss")',
    "joinnum|1-30": 1,
    "price|1-1000": 1,
    "districtId|1000-10000": 1000,
    "cityId|1000-10000": 1000,
    "provinceId|1000-10000": 1000,
    "districtName":  '@county()',
    "cityName":  '@city()',
    "provinceName":  '@province()',
    "address":  '@cword(5,40)',
    "jiaotong":  '@cword(5,40)',
    "tel": /^1[385][1-9]\d{8}/,
    "sequence": '0_1_2_3_5_6_mark1_mark2',
    "mark1": '@cword(2,10)',
    "mark2": '@cword(2,10)',
    "mark3": '@cword(2,10)',
    "mark4": '@cword(2,10)',
    "mark5": '@cword(2,10)'
  }
})

//Mock.mock(RegExp('/GetActivityDetail' + '.*'), GetActivityDetail)

// 获取活动/感悟草稿箱列表
let GetDraftList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'title': '@cword(2,10)',
    'site': '@cword(2,10)',
    'releaveTime': '@DATETIME("yyyy-MM-dd")'
  }]
})

//Mock.mock(RegExp('/GetDraftList' + '.*'), GetDraftList)

// 历史文章
let GetArticleList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'title': '@cword(2,10)',
    'roomName': '@cword(2,10)',
    'createDate': '@DATETIME("yyyy-MM-dd")'
  }]
})

// Mock.mock(RegExp('/getArticleList' + '.*'), GetArticleList)

// 大文章草稿
let GetArticleDraftList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'title': '@cword(2,10)',
    'roomName': '@cword(2,10)',
    'createDate': '@DATETIME("yyyy-MM-dd")'
  }]
})

Mock.mock(RegExp('/getArticleDraftList' + '.*'), GetArticleDraftList)

// 活动报名打印清单
let sex = ['男', '女']
let position = ['教师', '律师', '程序员', '出纳员', '人事']
let company = ['百度', '腾讯', '阿里', '谷歌', '苹果']
let GetSignUpList = Mock.mock({
  'data|30': [{
    'id|1-1000': 1,
    'name': '@cname(2,5)',
    'phone': /^1[385][1-9]\d{8}/,
    'occupation': '@cword(2,10)',
    'company|1': company,
    'position|1': position,
    'wechat': '@word(2,10)',
    'email': '@email()',
    'sex|1': sex
  }]
})

//Mock.mock(RegExp('/GetSignUpList' + '.*'), GetSignUpList)

// 活动报名详情
let handle = ['审核通过', '审核未通过']
let SignUpDetailList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'name': '@word(2,10)',
    'num': '@word(2,10)',
    'time': '@DATETIME("yyyy-MM-dd")',
    'handle|1': handle
  }]
})

//Mock.mock(RegExp('/SignUpDetailList' + '.*'), SignUpDetailList)

// 课程发布
let AddCourseList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'courseTitle': '@cword(2,20)',
    'courseSite': '@cword(2,10)',
    'courseAuther': '@cname(2,10)',
    'courseTime': '@DATETIME("yyyy-MM-dd")'
  }]
})

Mock.mock(RegExp('/addCourseList' + '.*'), AddCourseList)

// 课程草稿箱
let GetDraftCourseList = Mock.mock({
  'totalNum|0-200': 1,
  'data|10': [{
    'id|1-1000': 1,
    'courseTitle': '@cword(2,20)',
    'courseSite': '@cword(2,10)',
    'courseAuther': '@cname(2,10)',
    'courseTime': '@DATETIME("yyyy-MM-dd")'
  }]
})

Mock.mock(RegExp('/getDraftCourseList' + '.*'), GetDraftCourseList)
