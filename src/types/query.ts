import { FixedObject, FluidObject } from 'gatsby-image';

export interface Image {
  childImageSharp: {
    fixed: FixedObject;
    fluid: FluidObject;
  };
}
