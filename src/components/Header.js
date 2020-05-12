import React from 'react'
import PropTypes from 'prop-types'
import AppointmentForm from './AppointmentForm'

const Header = ({ addAppointment }) => (
	<header>
		<h1>Add Date</h1>
		<AppointmentForm
			onSave={(data) => {
				addAppointment(data)
			}}
		/>
	</header>
)

Header.propTypes = {
	addAppointment: PropTypes.func.isRequired
}

export default Header 
