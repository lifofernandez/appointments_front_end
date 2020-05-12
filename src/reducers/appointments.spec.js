import appointments from './appointments'

describe('appointments_reducer', () =>{
		it('should handle initial state', () => {
			expect(
				appointments(undefined, {})
			).toEqual([])
		})

		it('should handle ADD_APPOINTMENT', () => {
			expect(
				appointments([],{
					type: 'ADD_APPOINTMENT',
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				})
			).toEqual([
				{
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				}
			])
		})
			expect(
				appointments([
				{
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				}
				],{
					type: 'ADD_APPOINTMENT',
					id: 1,
					name: 'second appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "14:00:00",
					end: "15:00:00"

				})
			).toEqual([
				{
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				},
				{
					id: 1,
					name: 'second appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "14:00:00",
					end: "15:00:00"
				},
			])
			expect(
				appointments([
				{
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				},
				{
					id: 1,
					name: 'second appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "14:00:00",
					end: "15:00:00"
				}
				],{
					type: 'ADD_APPOINTMENT',
					id: 2,
					name: 'third appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "15:00:00",
					end: "16:00:00"
				})
			).toEqual([
				{
					id: 0,
					name: 'first appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "13:00:00",
					end: "14:00:00"
				},
				{
					id: 1,
					name: 'second appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "14:00:00",
					end: "15:00:00"
				},
				{
					id: 2,
					name: 'third appointment',
					owner: 'user',
					date: "2020-01-01",
					start: "15:00:00",
					end: "16:00:00"

				}
			])
	}
)
