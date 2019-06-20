export interface Media {
  phone: string;
  tablet: string;
  laptop: string;
}

export interface Colors {
  main: string;
  secondary: string;
}

export interface Theme {
  media: Media;
  colors: Colors;
  contentWidth: string;
}
