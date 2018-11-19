import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['IBM Plex Sans', 'Arial', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Serif', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'IBM Plex Sans',
      styles: ['300', '400', '500'],
    },
    {
      name: 'IBM Plex Serif',
      styles: ['300', '400', '500'],
    },
  ]
});

export default typography;
