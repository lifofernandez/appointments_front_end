import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'

const AppointmentEdit = ({ 
	props, handlers 
	}) => {
		const { name, owner, date, start, end } = props
		const { handleNameChange, handleOwnerChange, 
						handleDateChange, handleStartChange,
						handleEndChange } = handlers
		return (
			<dl>
				<dt>Appointment name</dt>
				<dd><TextInput value={name} placeholder={name} onChange={handleNameChange}/></dd>
				<dt>Owner</dt>
				<dd><TextInput value={owner} onChange={handleOwnerChange}/></dd>
				<dt>Date</dt>
				<dd><DateInput value={date} onChange={handleDateChange}/></dd>
				<dt>Start</dt>
				<dd><TimeInput time={start} onChange={handleStartChange}/></dd>
				<dt>End</dt>
				<dd><TimeInput time={end} onChange={handleEndChange}/></dd>
				<button type="submit" value="Submit">Update</button>
			</dl>
		)
	}

AppointmentEdit.propTypes = {
	props: PropTypes.object,
	handlers: PropTypes.object
}

export default AppointmentEdit
