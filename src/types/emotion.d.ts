import '@emotion/react';
import { ThemeInterface } from '../styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeInterface {}
}
