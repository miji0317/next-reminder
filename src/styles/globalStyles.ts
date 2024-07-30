import { createGlobalStyle } from 'styled-components';
import { media } from './media';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    overflow-x: hidden;
    font-size: 10px;
    font-family: 'NanumSquareNeoVariable';
  }
  a {
    text-decoration: none;
  }

  /* 마우스 포인터 */
  .mousePointer {
    cursor: pointer;
  }

  /* 사이드 여백 */
  .defaultPadding {
    @media ${media.large} {
      padding-left: 10rem;
      padding-right: 10rem;
    }
    @media ${media.small} {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }
`;
