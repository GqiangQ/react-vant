import * as React from 'react'
import PropType from './PropsType'
import {createNamespace} from '../../utils'
import '@vant/icons/src/encode.less'
import './index.less'

const Icon: React.FunctionComponent<PropType> = (props) => {
  let { name ,className='', style = {}, size, color, dot = false, badge, onClick, ...otherProps} = props

  const defaultName= createNamespace('icon')
  let classes = `${defaultName} ${createNamespace(name, defaultName)} ${className}`

  let badgeHtml = () => {
    if(!dot) return
      if(badge) return <div className="van-info">{badge}</div>
      else return <div className="van-info van-info--dot"></div>
  }

  {
    if(typeof size === 'number') {
      style.fontSize = size + 'px'
    }
    else {
      if(/em$|px/.test(size)) style.fontSize = size
      else style.fontSize = size  + 'px'
    }
    if(color) {
      style.color = color
    }
  }
  return(
    <i className={classes} onClick={onClick} style={style} { ...otherProps }>
      {badgeHtml()}
    </i>
  )
}
export default Icon