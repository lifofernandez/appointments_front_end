import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_PAST, SHOW_FUTURE } from '../constants/AppointmentFilters'

const FILTER_TITLES = {
	[SHOW_ALL] : 'All',
	[SHOW_PAST]: 'Past',
	[SHOW_FUTURE]: 'Future'
}

const FilterMenu = () => {

	return(
		<div className="middleSection">
		<ul className="filters">
			{Object.keys(FILTER_TITLES).map(filter =>
				<li key={filter}>
					<FilterLink filter={filter}>
						{FILTER_TITLES[filter]}
					</FilterLink>
				</li>
			)}
		</ul>
		</div>
	)

}

export default FilterMenu
