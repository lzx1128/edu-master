import { rq, rqBaseUrl } from './request.js'
export const getSubjectList = () => {
  return rq({
    url: rqBaseUrl + 'subject/list'
  })
}