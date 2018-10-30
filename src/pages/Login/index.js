import React, { PureComponent } from 'react';
import './style.module.less';
import { Button } from 'antd';
import { Exception } from 'ant-design-pro';
import Debounce from 'lodash-decorators/debounce';
const actions = (
  <div>
    <Button type="primary">Home</Button>
    <Button>Detail</Button>
  </div>
);

export default class LoginPage extends PureComponent {
  
  @Debounce(600) 
  onClick = () => {

  }
  render() {
    return (
      <div className={'container'}>
        LoginPage
        <Exception type="403" actions={actions} />
      </div>
    )
  }
}
