import mockRequests from '../util/mock'
 
//获取轮播图的接口
export const reqGetHomeCards = () =>
  mockRequests({
    url: '/banner',
    method: 'get',
  })
 
