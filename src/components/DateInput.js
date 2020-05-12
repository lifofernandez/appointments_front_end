import React from 'react'
import PropTypes from 'prop-types'

const DateInput =({
	 value, onChange
}) => (
		<input type="date" value={value} onChange={onChange}/>
)

DateInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default DateInput
