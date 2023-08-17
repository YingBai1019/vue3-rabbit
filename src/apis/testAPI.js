import httpInstance from "@/utils/http";

export function getCategory(){
    return httpInstance({
        url:'home/category/head'
    })
}
// import http from '@/utils/http'

// export function getCategoryAPI () {
//   return http({
//     url: 'home/category/head'
//   })
// }