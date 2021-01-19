import { contentWidth } from '../config/siteConfig.js';

const media = {
  phone: '(max-width: 599px)',
  tablet: '(max-width: 959px)',
  laptop: '(max-width: 1439px)',
};

const colors = {
  main: '#0d2b00',
  secondary: '#ffffff',
  'text-dark': '#ffffff',
  'text-light': '#000000',
  'background-light': '#ffffff',
};

const fonts = {
  sans: "'IBM Plex Sans', sans-serif",
  serif: "'IBM Plex Serif', serif",
  mono: "'IBM Plex Mono', monospace",
};

const theme = {
  fonts,
  media: {
    phone: `@media screen and ${media.phone}`,
    tablet: `@media screen and ${media.tablet}`,
    laptop: `@media screen and ${media.laptop}`,
  },
  colors,
  contentWidth: contentWidth + 'px',
};

export type ThemeInterface = typeof theme;
export type Font = keyof typeof fonts;

export default theme;
