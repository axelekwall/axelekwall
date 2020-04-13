import { Theme, Media, Colors, Fonts } from '../types/utils';

import { contentWidth } from '../config/siteConfig.js';

const media: Media = {
  phone: '(max-width: 599px)',
  tablet: '(max-width: 959px)',
  laptop: '(max-width: 1439px)',
};

const colors: Colors = {
  main: '#0d2b00',
  secondary: '#ffffff',
  'text-dark': '#ffffff',
  'text-light': '#000000',
  'background-light': '#ffffff',
};

const fonts: Fonts = {
  sans: "'IBM Plex Sans', sans-serif",
  serif: "'IBM Plex Serif', serif",
  mono: "'IBM Plex Mono', monospace",
};

const theme: Theme = {
  fonts,
  media: {
    phone: `@media screen and ${media.phone}`,
    tablet: `@media screen and ${media.tablet}`,
    laptop: `@media screen and ${media.laptop}`,
  },
  colors,
  contentWidth: 900 + 'px',
};

export { media, colors, contentWidth, fonts };

export default theme;
