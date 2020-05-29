import request from "./request.js"
export default function getHomeMultidata(){
  return request({
    url : "/home/multidata"
  })
}
