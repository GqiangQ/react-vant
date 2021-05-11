import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Vant from '../../src'

function IconDome() {
  return (
    <div className='page'>
      <div className="card">
        <h5>按钮类型</h5>
        <Vant.Button type="primary">主要按钮</Vant.Button>
        <Vant.Button type="info">信息按钮</Vant.Button>
        <Vant.Button type="default">默认按钮</Vant.Button>
        <Vant.Button type="warning">警告按钮</Vant.Button>
        <Vant.Button type="danger">危险按钮</Vant.Button>
      </div>
      <div className="card">
        <h5>朴素按钮</h5>
        <Vant.Button type="primary" plain>主要按钮</Vant.Button>
        <Vant.Button type="info" plain>信息按钮</Vant.Button>
      </div>
      <div className="card">
        <h5>细边框</h5>
        <Vant.Button type="primary" hairline plain>主要按钮</Vant.Button>
        <Vant.Button type="info" hairline plain>信息按钮</Vant.Button>
      </div>
    </div>
    )
}
export default IconDome