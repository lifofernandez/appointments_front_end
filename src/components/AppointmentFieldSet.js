import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateTimeInput from './DateTimeInput'

import Label from './Label'

// import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

const AppointmentFieldSet = ({
	props, handlers
	}) => {
		const { name, owner, date } = props
		const { handleNameChange,
			handleOwnerChange, 
			handleDateChange,
			handleStartChange,
			handleEndChange
		} = handlers
		return (
			<fieldset className="AppointmentFieldSet">
				<legend>Crear Cita</legend>
				<Label 
					className="Name"
					text="Name"
					element=<TextInput
						className="Name"
						value={name}
						onChange={handleNameChange} /> 
				/>
				<Label
					className="Owner"
					text="Owner"
					element=<TextInput
						className="Owner"
						value={owner}
						onChange={handleOwnerChange} /> 
				/>
				<DateTimeInput 
					text="Start"
					className="Start"
					dateInputValue={date}
					onChangeDate={handleDateChange}
					onChangeTime={handleStartChange}
				/>
				<Label className="End"
					text="End"
					element=<TimeInput
					onChange={handleEndChange} /> 
				/>
				<Button type="submit"
					value="Submit">
					Add Date
				</Button>
			</fieldset>
		)
	}

AppointmentFieldSet.propTypes = {
	props: PropTypes.object,
	handlers: PropTypes.object
}

export default AppointmentFieldSet
