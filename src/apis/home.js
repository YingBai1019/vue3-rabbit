import httpInstance from '@/utils/http'

// get banner
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}
// /**
//  * @description: 获取新鲜好物
//  * @param {*}
//  * @return {*}
//  */
export function findNewAPI () {
    return httpInstance({
      url:'/home/new'
    })
  }

