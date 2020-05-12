import{
	ADD_APPOINTMENT,
	DELETE_APPOINTMENT,
	EDIT_APPOINTMENT
} from '../constants/ActionTypes'

const appointments = ( state = [], action) => {
	switch(action.type){
		case ADD_APPOINTMENT:
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					owner: action.owner,
					date: action.date,
					start: action.start,
					end: action.end
				}
			]
		case DELETE_APPOINTMENT:
			return state.filter( appointment =>
				appointment.id !== action.id
			)
		case EDIT_APPOINTMENT:
			return state.map( appointment =>
				appointment.id === action.id ?
					{ ...action.data } :
					appointment
			)
		default:	
			return state
	}
}

export default appointments
