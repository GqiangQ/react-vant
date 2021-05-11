import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vant from '../src'

import Dome from './pages'

ReactDOM.render(
	<>
		<Dome.Button></Dome.Button>
		<Dome.Icon />
	</>,
	document.querySelector('#root')
);

