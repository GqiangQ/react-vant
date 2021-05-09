import * as React from 'react'
import PropType from './PropsType'
import '@vant/icons/src/encode.less'
import './index.less'

const Icon: React.FunctionComponent<PropType> = (props) => {
  console.log(props);
  return(
    <i className={`van-icon van-icon-${props.name}`} onClick={props.onclick}>
    </i>
  )
}
export default Icon