//import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { addAppointment } from '../actions'

export default connect(null, {addAppointment})(Header)

