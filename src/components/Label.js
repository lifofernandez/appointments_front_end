import React from 'react'
import PropTypes from 'prop-types'

const Label = ({
	className, text, element
 }) => (
	 <label htmlFor={className}>
	 	<span>
	  { text }
	 	</span>
	 	{ element }
	 </label>
 )

Label.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	element: PropTypes.element.isRequired,
}

export default Label 
