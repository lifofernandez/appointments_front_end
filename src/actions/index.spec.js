import * as actions from './index'	

let data = {
					 	id: 0,
					 	name: 'first appointment',
					 	owner: 'user',
					 	date: "2020-01-01",
					 	start: "13:00:00",
					 	end: "14:00:00"
					 }

describe('appointments actions', () => {
	it('addAppointment should create ADD_APPOINTMENT action', () => {
		expect(actions.addAppointment(data)).toEqual({
			type: 'ADD_APPOINTMENT',
			...data
		})
	})
})
