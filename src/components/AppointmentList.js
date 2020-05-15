import React from 'react'
import PropTypes from 'prop-types'
import AppointmentItem from './AppointmentItem'
import Table from 'react-bootstrap/Table'

const AppointmentList = ({ filteredAppointments, actions }) => (
	<Table striped bordered hover variant="dark" size="sm" className="appointment-list" >

	<thead>
 	   <tr>
 	     <th>#</th>
 	     <th>Title</th>
 	     <th>Owner</th>
 	     <th>Date</th>
 	     <th>Start</th>
 	     <th>End</th>
 	     <th>Actions</th>
 	   </tr>
 	</thead>
  	<tbody>
		{filteredAppointments.map( a =>
			<AppointmentItem
				key={a.id}
				appointment={a} {...actions}
			/>
		)}
  	</tbody>
	</Table>
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


