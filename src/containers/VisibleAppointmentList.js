import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppointmentList from '../components/AppointmentList'
import { getVisibleAppointments } from '../selectors'
import * as AppointmentActions from '../actions'

const mapStateToProps = state => ({
	filteredAppointments: getVisibleAppointments(state)	
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(AppointmentActions, dispatch) 
})

const VisibleAppointmentList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppointmentList)

export default VisibleAppointmentList
