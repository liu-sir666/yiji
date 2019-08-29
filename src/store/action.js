import { Like, ADD_COMMENT } from './actionType'

const focus = payload => {
  console.log(payload)

  return {
    type: Like,
    payload
  }
}
const addComment = (payload, clear) => {
  console.log(clear)
  return {
    type: ADD_COMMENT,
    payload,
    clear
  }
}
export { focus, addComment }
