import { rq, rqBaseUrl } from './request.js'

export const getGradeList = () => {
  return rq({
    url: rqBaseUrl + 'grade/list'
  })
}