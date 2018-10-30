import React from 'react';
import { Link } from 'dva/router';
import { PageHeader } from 'ant-design-pro';
import { connect } from 'dva';
import GridContent from './GridContent';
import './index.less';
import MenuContext from '@/layouts/MenuContext';

const PageHeaderWrapper = ({ children, contentWidth, childrenClassName, wrapperClassName, top, ...restProps }) => {
  return (
    <div style={{ margin: '-24px -24px 0' }} className={`${wrapperClassName} ysynet-pageheader`}>
      {top}
      <MenuContext.Consumer>
        {value => (
          <PageHeader
            className={childrenClassName}
            wide={contentWidth === 'Fixed'}
            home={'HomePage'}
            {...value}
            key="pageheader"
            {...restProps}
            linkElement={Link}
            itemRender={item => {
              if (item.locale) {
                return '什么鬼';
              }
              return item.name;
            }}
          />
        )}
      </MenuContext.Consumer>
      {children ? (
        <div className={'ysynet-pageheader-content'}>
          <GridContent>{children}</GridContent>
        </div>
      ) : null}
    </div>
  );
}

export default connect(({ setting }) => ({
  contentWidth: setting.contentWidth,
}))(PageHeaderWrapper);
