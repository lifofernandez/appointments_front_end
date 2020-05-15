import React from 'react'
import PropTypes from 'prop-types'

const AppointmentDetail = ({
	id, name, owner, date, start, end
}) => (
	<>
		<td> { id }  </td>
		<td> { name }  </td>
		<td> { owner } </td>
		<td> { date }  </td>
		<td> { start } </td>
		<td> { end }   </td>
	</>
)

AppointmentDetail.propTypes = {
	name: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired
}

export default AppointmentDetail
