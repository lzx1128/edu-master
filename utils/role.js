import { rq, rqBaseUrl } from './request.js'
export const getRoleList = () => {
  return rq({
    url: rqBaseUrl + 'role/list'
  })
}