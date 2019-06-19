import {
  Component,
  FunctionComponent,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { media } from '../utils/theme';

interface State {
  show: boolean;
}

interface Props {
  children: ReactNode;
  breakPoint: string;
}

// TODO: Continue refactor to functional component
const BreakPoint: FunctionComponent<Props> = ({ children, breakPoint }) => {
  const [show, setShow] = useState(false);
  let mql: MediaQueryList;

  useEffect(() => {

  }, []);
  return show ? children : null;
};

class BreakPointOld extends Component<Props, State> {
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

  public render() {
    const { children } = this.props;
    const { show } = this.state;
    return show ? children : null;
  }
}

export default BreakPoint;
