const initialState = null

export default (state = initialState, action) => {
  if(action.type === 'Data') {
    return action.payload
  }
  return state
}
