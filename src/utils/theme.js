const media = {
  phone: '(max-width: 599px)',
  tablet: '(max-width: 959px)',
};

const colors = {
  main: '#e9e3e6',
};

const contentWidth = 960;

const theme = {
  media: {
    phone: `@media screen and ${media.phone}`,
    tablet: `@media screen and ${media.tablet}`,
  },
  colors,
  contentWidth: contentWidth + 'px',
};

export { media, colors, contentWidth };

export default theme;
