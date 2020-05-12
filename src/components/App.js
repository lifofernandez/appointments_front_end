import React from 'react'
import AddAppointment from '../containers/AddAppointment'
import FilterMenu from '../components/FilterMenu'
import VisibleAppointmentList from '../containers/VisibleAppointmentList'

const App = () => (
	<div>
		<AddAppointment />
		<FilterMenu />
		<VisibleAppointmentList />
	</div>
)

export default App
