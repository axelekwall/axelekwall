import { ReactElement } from 'react';

export type C<Props = undefined> = Props extends undefined
  ? () => ReactElement | null
  : (props: Props) => ReactElement | null;
