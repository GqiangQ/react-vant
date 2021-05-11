import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vant from '../src'

const fn = (e: React.MouseEvent) => {
console.log(e.target);

}

ReactDOM.render(
	<div>
		<Vant.Icon dot name="location" />
		<Vant.Icon dot badge={9} name="arrow" />
		<Vant.Icon color='green' name="arrow-left" />
		<Vant.Icon size={40} name="arrow-down" />
		<Vant.Icon  name="arrow-down" />
		<Vant.Icon name="arrow-down" />
		<Vant.Icon name="arrow-down" />
		<Vant.Icon name="success" />
	</div>,
	document.querySelector('#root')
);

