import Typography from 'typography';

const typography = new Typography({
  title: 'axelekwall',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 500,
  headerFontFamily: ['IBM Plex Sans', 'Arial', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'Arial', 'sans-serif'],
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['300', '400', '500'],
    },
  ],
  overrideStyles: ({ rhythm, scale }, options) => ({
    'h1.big_title': scale(2.5),
    'p.front_page_bio': {
      ...scale(1 / 2),
    },
  }),
});

export default typography;
