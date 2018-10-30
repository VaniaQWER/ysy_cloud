import React, { PureComponent } from 'react';

class RightContent extends PureComponent {
  render() {
    const { theme } = this.props;
    let className = 'right';
    if (theme === 'dark') {
      className = `right dark`;
    }
    return (
      <div className={className}>
        right content
      </div>
    )
  }
}

export default RightContent;