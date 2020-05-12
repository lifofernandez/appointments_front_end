import React from 'react'
import PropTypes from 'prop-types'
import 'rc-time-picker/assets/index.css'

import moment from 'moment'
import TimePicker from 'rc-time-picker'

const now = moment().hour(0).minute(0);
const format = 'HH:mm a';

const TimeInput = ({
		onChange, date	
	}) => (
		<TimePicker
			showSecond = { false }
			defaultValue = { date ? date : now } 
			className = 'xxx'
			onChange = { onChange }
			format = { format }
			use12Hours
			inputReadOnly
		/>
)

TimeInput.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default TimeInput
