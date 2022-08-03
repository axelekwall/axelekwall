import '@emotion/react';
import { ThemeInterface } from '../styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeInterface {}
}
