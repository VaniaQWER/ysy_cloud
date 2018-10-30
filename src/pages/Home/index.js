import React, { PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

export default class HomePage extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper
        title={<div>title</div>}
        content={<div>content</div>}
      >
        <div style={{height: 1800}}>
          头部固定测试页面
        </div>
      </PageHeaderWrapper>
    )
  }
}
