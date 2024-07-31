import { useState, useEffect } from 'react';

// 브라우저 사이즈 구하기
export const useWindowSize = () => {
  // 초기값 0
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // resize 핸들러
    function resizeHandler() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // resize 이벤트리스너 부착
    const timer = setInterval(() => {
      window.addEventListener('resize', resizeHandler);
    }, 100);

    // 핸들러를 바로 실행하여 초기값 세팅
    resizeHandler();

    // resize 이벤트리스너 제거 및 clean up
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
};
