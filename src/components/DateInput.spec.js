import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'
import DateInput from './DateInput'


const setup = (propOverrides) => {
	const props = Object.assign({
		value: '2020-01-01',
		onChange : jest.fn()
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<DateInput {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output
	}
}

describe( 'component', () => {
	describe('DateInput', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('input')
			expect(output.props.value).toBe('2020-01-01')
		})
		it('should call onChange function', () => {
			const { output,props } = setup()
			output.props.onChange()
			expect(props.onChange).toBeCalled()
		})
	})
})
