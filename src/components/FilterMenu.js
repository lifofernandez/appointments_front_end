import React from 'react'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_PAST, SHOW_FUTURE } from '../constants/AppointmentFilters'

import ButtonGroup from 'react-bootstrap/ButtonGroup'

const FILTER_TITLES = {
	[SHOW_PAST]: 'Past',
	[SHOW_ALL] : 'All',
	[SHOW_FUTURE]: 'Future'
}

const FilterMenu = () => {

	return(
		<div className="middleSection">
		<ButtonGroup className="filters">
			{Object.keys( FILTER_TITLES ).map(
				filter=>
					<FilterLink filter={ filter }>
						{ FILTER_TITLES[filter] }
					</FilterLink>
				)
			}
		</ButtonGroup >
		</div>
	)

}

export default FilterMenu
