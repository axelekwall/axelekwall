export interface Media {
  phone: string
  tablet: string
  laptop: string
}

export interface Colors {
  main: string
  secondary: string
}

export interface Fonts {
  sans: string
  serif: string
  mono: string
}

export interface Theme {
  fonts: Fonts
  media: Media
  colors: Colors
  contentWidth: string
}
