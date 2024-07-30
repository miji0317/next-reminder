interface Viewport {
  [key: string]: number;
}

interface Media {
  [key: string]: string;
}

export const breakPoints: Viewport = {
  mobile: 480,
  tablet: 768,
  laptop: 1024
};

export const media: Media = {
  small: `screen and (max-width: ${breakPoints.mobile}px)`,
  regular: `screen and (max-width: ${breakPoints.tablet}px)`,
  large: `screen and (min-width: ${breakPoints.tablet + 0.1}px)`
};
