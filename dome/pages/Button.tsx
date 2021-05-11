import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vant from '../../src'

function IconDome() {
    return (
        <div className='page'>
        <Vant.Icon dot name="location" />
		<Vant.Icon dot badge={9} name="arrow" />
		<Vant.Icon color='green' name="arrow-left" />
		<Vant.Icon size={40} name="arrow-down" />
		<Vant.Icon  name="arrow-down" />
		<Vant.Icon name="arrow-down" />
		<Vant.Icon name="arrow-down" />
		<Vant.Icon name="success" />
        </div>
    )
}
export default IconDome