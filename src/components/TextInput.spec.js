import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'
import TextInput from './TextInput'

const setup = (propOverrides) => {
	const props = Object.assign({
		value: 'Appointment name',
		className: 'Name',
		onChange : jest.fn()
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<TextInput {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output
	}
}

describe( 'component', () => {
	describe('TextInput', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('input')
			expect(output.props.value).toBe('Appointment name')
			expect(output.props.className).toBe('Name')
		})
		it('should call onChange function', () => {
			const { output,props } = setup()
			output.props.onChange()
			expect(props.onChange).toBeCalled()
		})
	})
})
