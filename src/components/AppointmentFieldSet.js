import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'
import DateTimeInput from './DateTimeInput'
import Label from './Label'

const AppointmentFieldSet = ({
	props, handlers
	}) => {
		const { name, owner, date, end } = props
		const { handleNameChange, handleOwnerChange, 
						handleDateChange, handleStartChange,
						handleEndChange } = handlers
		return (
			<fieldset className="AppointmentFieldSet">
				<legend>Create Appointment</legend>
					<Label className="Name" text="Name"
					element= <TextInput className="Name" value={name} onChange={handleNameChange} /> 
					/>
					<Label className="Owner" text="Owner"
					element = <TextInput className="Owner" value={owner} onChange={handleOwnerChange} /> 
					/>
					<DateTimeInput 
						text="Start"
						className="Start"
						dateInputValue={date}
						onChangeDate={handleDateChange}
						onChangeTime={handleStartChange}
					/>
					<Label className="End" text="End"
					element=<TimeInput onChange={handleEndChange} /> 
					/>
					<button type="submit" value="Submit">
						Add Date
					</button>
			</fieldset>
		)
	}

AppointmentFieldSet.propTypes = {
	props: PropTypes.object.isRequired,
	handlers: PropTypes.object.isRequired
}

export default AppointmentFieldSet
