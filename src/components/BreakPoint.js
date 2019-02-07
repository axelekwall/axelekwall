import React, { Component } from 'react';

import { media } from '../utils/theme';

class BreakPoint extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    const mql = window.matchMedia(media[this.props.breakPoint]);
    mql.addListener(this.update);
    this.update(mql);
  }

  update = e => {
    const { show } = this.props;
    console.log(e);
    if (e.matches) {
      this.setState({
        show,
      });
    } else {
      this.setState({
        show: !show,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { show } = this.state;
    return show ? children : null;
  }
}

export default BreakPoint;
