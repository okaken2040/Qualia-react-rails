import {
  CHANGE_SERIF,
  CHANGE_TOP,
  CHANGE_LEFT
} from '../actions'


const editScene = (state = [], action) => {
	// console.log(state)
  switch(action.type) {
    case CHANGE_SERIF:
			console.log("aaaaaaaaaa")
			if(action.index == 0){
				return [{ ...state[0],serif:action.serif}, state[1]]
			} else {
				return  [state[0],{ ...state[1],serif:action.serif}]
			}
    case CHANGE_TOP:
			if(action.index == 0){
				return [{ ...state[0],top:action.top}, state[1]]
			} else {
				return  [state[0],{ ...state[1],top:action.top}]
			}
    case CHANGE_LEFT:
			if(action.index == 0){
				return [{ ...state[0],left:action.left}, state[1]]
			} else {
				return  [state[0],{ ...state[1],left:action.left}]
			}
    default:
				console.log("default")
      return state
  }
}

export default editScene
