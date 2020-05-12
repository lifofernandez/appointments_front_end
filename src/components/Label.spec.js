import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer'
import { render } from 'react-dom'
import Label from './Label'
import TextInput from './TextInput'

const setup = (propOverrides, subPropOverrides) => {
	const subProps = Object.assign({
		value: 'Appointment name',
		className: 'Name',
		onChange : jest.fn()
	}, subPropOverrides)

	const renderer = createRenderer();
	renderer.render(<TextInput {...subProps}/>)
	const subOutput = renderer.getRenderOutput()

	const props = Object.assign({
		className: 'Label for',
		text: 'Label text',
		element: subOutput
	}, propOverrides)

	renderer.render(<Label {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output
	}
}

describe( 'component', () => {
	describe('Label', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('label')
			expect(output.props.htmlFor).toBe('Label for')
			const [span, textInput] = output.props.children
		  expect(span.type).toBe('span')
		  expect(span.props.children).toBe('Label text')
			expect(textInput.type).toBe('input')
		})
	})
})
