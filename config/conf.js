if (process.env.NODE_ENV == 'development') {
  module.exports = {
    title: '领课学院1',
    baseUrl: 'http://roncoo.vicp.net/api' //java项目接口地址
  }
} else if (process.env.NODE_ENV == 'testing') {
  module.exports = {
    title: '领课学院2',
    baseUrl: 'http://roncoo.vicp.net/api
  }
  else {
    module.exports = {
      title: '领课学院3',
      baseUrl: 'http://roncoo.vicp.net/api' //java项目接口地址
    }
  }
