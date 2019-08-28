import { Like, ADD_COMMENT } from './actionType'

const focus = payload => {
  console.log(payload)

  return {
    type: Like,
    payload
  }
}
const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}
export { focus, addComment }
