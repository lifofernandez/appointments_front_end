import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Header from './Header'
import AppointmentForm from './AppointmentForm'

const setup = (propOverrides) => {
	const props = Object.assign({
		addAppointment: jest.fn()
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<Header {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output,
		renderer: renderer
	}
}

describe( 'component', () => {
	describe('Header', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('header')
			const h1 = output.props.children[0]
			expect(h1.type).toBe('h1')
			expect(h1.props.children).toBe('Add Date')
		})
		it('should call addAppointment function', () => {
			const { output,props } = setup()
			const input = output.props.children[1]
			input.props.onSave()
			expect(props.addAppointment).toBeCalled()
		})
	})
})
