import { Component, ReactElement } from 'react';
import { media } from '../utils/theme';

interface State {
  show: boolean;
}

interface Props {
  show: boolean;
  breakPoint: string;
}

class BreakPoint extends Component<Props, State> {
  private state = {
    show: false,
  };

  private mql: MediaQueryList;

  public componentDidMount(): void {
    const mql = window.matchMedia(media[this.props.breakPoint]);
    this.mql = mql;
    mql.addListener(this.update);
    this.update(mql);
  }

  public componentWillUnmount(): void {
    this.mql.removeListener(this.update);
  }

  private update = (mql: MediaQueryList): void => {
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

  private render(): ReactElement {
    const { children } = this.props;
    const { show } = this.state;
    return show ? children : null;
  }
}

export default BreakPoint;
