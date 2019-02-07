import { Component } from 'react';

import { media } from '../utils/theme';

class BreakPoint extends Component {
  state = {
    show: false,
  };

  mql;

  componentDidMount() {
    const mql = window.matchMedia(media[this.props.breakPoint]);
    this.mql = mql;
    mql.addListener(this.update);
    this.update(mql);
  }

  componentWillUnmount() {
    this.mql.removeListener(this.update);
  }

  update = mql => {
    const { show } = this.props;
    if (mql.matches) {
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
