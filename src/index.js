import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './static/style.css'

//const store = createStore(rootReducer)
const store = createStore(
	rootReducer, /* preloadedState,*/
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
