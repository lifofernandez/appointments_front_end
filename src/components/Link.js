import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from 'react-bootstrap/Button'

const Link = ({ active, children, setFilter }) => 
	(
		<Button
			className={ classnames({ selected : active })}
			style={{ cursor: 'pointer' }}
			onClick= {() => setFilter()}
		>
			{children}
		</Button>
	)

Link.propTypes = {

	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	setFilter: PropTypes.func.isRequired
}

export default Link
