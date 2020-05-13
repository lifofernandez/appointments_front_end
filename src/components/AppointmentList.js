import React from 'react'
import PropTypes from 'prop-types'
import AppointmentItem from './AppointmentItem'

const AppointmentList = ({ filteredAppointments, actions }) => (
	<ul className="appointment-list">
		{filteredAppointments.map( a =>
			<AppointmentItem key={a.id} appointment={a} {...actions} />
		)}
	</ul>
)

AppointmentList.propTypes = {
	filteredAppointments: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		start: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	actions:PropTypes.object.isRequired
}

export default AppointmentList
