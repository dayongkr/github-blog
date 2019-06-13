import React, { useState, useEffect, useRef } from 'react';

function useStatus(element) {
  const bar = useRef();
  const { current: target } = element;
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [percent, setPercent] = useState(0);

  const changeBar = () => {
    if (percent < 0) {
      bar.current.style.transform = 'translateX(-100%)';
    } else if (percent <= 100) {
      bar.current.style.transform = `translateX(${-100 + percent}%)`;
      bar.current.style.borderRadius = '0px, 5px, 5px, 0px';
    } else {
      bar.current.style.transform = 'translateX(0%)';
    }
  };

  const checkScroll = () => {
    setPercent(
      ((scrollY - target.offsetTop) / (target.offsetHeight - innerHeight)) *
        100,
    );
    setScrollY(window.scrollY);
    changeBar();
  };

  const checkInnerHeight = () => {
    setInnerHeight(window.innerHeight);
    changeBar();
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkInnerHeight);
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkInnerHeight);
    };
  });
  return (
    <>
      <div id="statusBarContainer">
        <div id="statusBar" ref={bar} />
      </div>
    </>
  );
}

export default useStatus;
