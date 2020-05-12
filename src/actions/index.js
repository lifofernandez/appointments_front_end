import * as types from '../constants/ActionTypes'

let nextAppointmentId = 0

export const addAppointment = (data) => ({
	type: types.ADD_APPOINTMENT,
	id: nextAppointmentId++,
	...data
})

export const deleteAppointment = id => ({
	type: types.DELETE_APPOINTMENT,
	id: id,
})

export const editAppointment = (id,data) => ({
	type: types.EDIT_APPOINTMENT,
	id: id,
	...data
})

export const setVisibilityFilter = filter => ({ type : types.SET_VISIBILITY_FILTER, filter })
