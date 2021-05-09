import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vant from '../src'

ReactDOM.render(
	<div>
		<Vant.Icon name="location" onclick={()=>{console.log('eee')}}/>
	</div>,
	document.querySelector('#root')
);

