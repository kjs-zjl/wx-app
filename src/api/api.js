import {
  get,
  post
} from './http'

// 登录
export const apiLogin = p => post('api/login', p)
// 获取地址
export const apiAddress = p => get('api/getAddress', p)
// 获取正在热映电影列表
export const apiLocationList = p => get('/api/Showtime/LocationMovies.api', p)
// 获取即将上映电影列表
export const apiCommingList = p => get('/api/Movie/MovieComingNew.api', p)
// 获取影片详情
export const apiMovieDetial = p => get('/api/movie/Detail.api', p)
