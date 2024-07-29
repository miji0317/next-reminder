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
  mobile: `(min-width: ${breakPoints.mobile}px)`,
  tablet: `(min-width: ${breakPoints.tablet}px)`,
  laptop: `(min-width: ${breakPoints.laptop}px)`,

  small: `(max-width: ${breakPoints.tablet}px)`,
  large: `(min-width: ${breakPoints.tablet + 0.1}px)`
};
