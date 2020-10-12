import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const getWidth = () => window.innerWidth;
  const [width, UpdWidth] = useState(getWidth);

  useEffect(() => {
    function handleResize() {
      UpdWidth(getWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWindowSize;
