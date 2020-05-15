import React from 'react'
import PropTypes from 'prop-types'
import AppointmentForm from './AppointmentForm'
import AppointmentFieldSet from './AppointmentFieldSet'




const Header = ({ addAppointment }) => (
	<div>
		<header>
			<h1>Add Date</h1>
		</header>
		<AppointmentForm
			onSave={(data) => {
				addAppointment(data)
			}}
			inputComponent={<AppointmentFieldSet />}
		/>
	</div>
)

Header.propTypes = {
	addAppointment: PropTypes.func.isRequired
}

export default Header 

