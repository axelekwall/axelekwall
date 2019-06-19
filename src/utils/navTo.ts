import { navigate } from 'gatsby';

type NavTo = (to: string) => () => void;

const navTo: NavTo = to => (): void => {
  navigate(to);
};

export default navTo;