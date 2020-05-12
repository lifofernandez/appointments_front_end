import React from 'react'
import PropTypes from 'prop-types'

const TextInput =({
	 className, value, onChange
}) => (
		<input className={className} type="text" value={value} onChange={onChange}/>
)

TextInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string
}

export default TextInput
