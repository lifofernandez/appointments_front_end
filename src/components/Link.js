import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ active, children, setFilter }) => 
	(
		<button
			className={ classnames({ selected : active })}
			style={{ cursor: 'pointer' }}
			onClick= {() => setFilter()}
		>
			{children}
		</button>
	)

Link.propTypes = {

	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	setFilter: PropTypes.func.isRequired
}

export default Link
