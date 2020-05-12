import React from 'react'
import PropTypes from 'prop-types'
import DateInput from './DateInput'
import TimeInput from './TimeInput'

const DateTimeInput = ({
	text, className, dateInputValue,onChangeDate, onChangeTime
	}) => (
		<label className={className}>
			{text}
			<TimeInput onChange={onChangeTime}/>
			<DateInput value={dateInputValue} onChange={onChangeDate}/>
		</label>
	)

DateTimeInput.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	dateInputValue: PropTypes.string.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	onChangeTime: PropTypes.func.isRequired,
}

export default DateTimeInput
