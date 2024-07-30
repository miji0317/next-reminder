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
    min-width: 100dvw;
    min-height: 100dvh;
    overflow-x: hidden;
    font-size: 10px;
    font-family: 'Pretendard-Regular';
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
    
    @media ${media.regular} {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }
    
  // 프리텐다드
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  }
`;
