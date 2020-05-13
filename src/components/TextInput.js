import React from 'react'
import PropTypes from 'prop-types'

const TextInput =({
	 className, value, onChange, placeholder
}) => (
		<input className={className} type="text" value={value} onChange={onChange} placeholder={placeholder}/>
)

TextInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	placeHolder: PropTypes.string
}

export default TextInput
