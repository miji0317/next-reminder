import { createGlobalStyle } from 'styled-components';
import { media, breakPoints } from './media';
import { colors } from './colors';

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
    overflow-y: scroll;
    font-size: 10px; // 1rem = 10px
    font-family: 'Pretendard-Regular';
  }
  a {
    text-decoration: none;
  }

  // 스크롤바 커스텀
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background-color: ${colors.NormalGray};
  }
  body::-webkit-scrollbar-thumb { 
    background-color: ${colors.LightPink};
  }
  body::-webkit-scrollbar-button {
    display: none;
  }
  body::-webkit-scrollbar-track,
  body::-webkit-scrollbar-thumb {
      border-radius: 5px;
  }

  // 최상단 레이어
  .topLayer {
    max-width: ${breakPoints.tablet}px;
    min-height: 100dvh;
    margin: 0 auto;
  }

  // 마우스 포인터
  .mousePointer {
    cursor: pointer;
  }

  // 사이드 기본 여백
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
