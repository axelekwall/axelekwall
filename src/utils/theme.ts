import { Theme, Media, Colors } from '../typings/utils';

const media: Media = {
  phone: '(max-width: 599px)',
  tablet: '(max-width: 959px)',
  laptop: '(max-width: 1439px)',
};

const colors: Colors = {
  main: '#e9e3e6',
  secondary: '#ffffff',
};

const contentWidth = 960;

const theme: Theme = {
  media: {
    phone: `@media screen and ${media.phone}`,
    tablet: `@media screen and ${media.tablet}`,
    laptop: `@media screen and ${media.laptop}`,
  },
  colors,
  contentWidth: contentWidth + 'px',
};

export { media, colors, contentWidth };

export default theme;
