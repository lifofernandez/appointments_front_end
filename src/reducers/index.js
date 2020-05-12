import { combineReducers } from 'redux'
import appointments from './appointments'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
	appointments,
	visibilityFilter
})

export default rootReducer 
