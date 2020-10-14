import { ReactElement } from 'react';

export interface Media {
  [key: string]: string;
}

export interface Colors {
  [key: string]: string;
}

export interface Fonts {
  [key: string]: string;
}

export type Theme = {
  fonts: Fonts;
  media: Media;
  colors: Colors;
  contentWidth: string;
};

export type C<Props = undefined> = Props extends undefined
  ? () => ReactElement | null
  : (props: Props) => ReactElement | null;
