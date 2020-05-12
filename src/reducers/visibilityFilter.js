import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/AppointmentFilters'

const visibilityFilters = ( state = SHOW_ALL, action ) => {
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilters
