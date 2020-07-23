// add the catsReducer
const catsReducer = (state = { cats: [], loading: false }, action) => {
  console.log(action)
  switch(action.type) {
    case "LOADING_CATS":
      return {
        ...state,
        loading: true
      }
    case "ADD_CATS":
      return {
        ...state,
        cats: action.cats,
        loading: false
      }
    default:
      return state
  }
}

export default catsReducer
