import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import DateTimeInput from './DateTimeInput'
import DateInput from './DateInput'
import TimeInput from './TimeInput'

const setup = (propOverrides) => {
	const props = Object.assign({
		className:'Date time input',
		text:'Label text',
		onChangeTime:jest.fn(),
		dateInputValue:'2020-01-01',
		onChangeDate: jest.fn()
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<DateTimeInput {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output,
		renderer: renderer
	}
}

describe( 'component', () => {
	describe('DateTimeInput', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('label')
			expect(output.props.className).toBe('Date time input')
			expect(output.props.children[0]).toBe('Label text')
			const timeInput = output.props.children[1]
			expect(timeInput.type).toBe(TimeInput)

			const dateInput = output.props.children[2]
			expect(dateInput.type).toBe(DateInput)
			expect(dateInput.props.value).toBe('2020-01-01')
		})
		it('should call onChangeTime function', () => {
			const { output, props } = setup()
			const timeInput = output.props.children[1]
			timeInput.props.onChange()
			expect(props.onChangeTime).toBeCalled()
		})
		it('should call onChangeDate function', () => {
			const { output, props } = setup()
			const dateInput = output.props.children[2]
			dateInput.props.onChange()
			expect(props.onChangeDate).toBeCalled()
		})
	})
})
