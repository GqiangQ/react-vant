import * as React from 'react'
import PropType from './PropsType'
import {createNamespace} from '../../utils'
import '@vant/icons/src/encode.less'
import './index.less'


const  Button: React.FunctionComponent<PropType> = (props) => {
	const { children ,className='', type = 'default',plain = false, hairline=false, size = 'normal' } = props
	const defaultName= createNamespace('button')
  let classes = `${defaultName} ${createNamespace(type, defaultName + '-')} ${createNamespace(size, defaultName + '-')} ${plain ? createNamespace('plain', defaultName + '-'): ''} ${hairline ? createNamespace('hairline', defaultName + '-'): ''} ${className}`
	return(
		<button className={classes}>
			<div className="van-button__content"><span className="van-button__text">{children}</span></div>
		</button>
	)
}
export default Button