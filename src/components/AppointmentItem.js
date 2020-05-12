import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppointmentDetail from './AppointmentDetail'

export default class AppointmentItem extends Component{
	static propTypes = {
		appointment: PropTypes.object.isRequired
	}
	state = {
		editing: false
	}
	render(){
		const { name, owner, date, start, end } = this.props.appointment
		const { appointment, deleteAppointment } = this.props
		let element
		if(this.state.editing){

		} else {
			element = (
				<AppointmentDetail {...appointment} />
			)
		}
		return (
			<li className="appointment">
			{ element }
				<button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
			
			</li>
		)
	}
}
