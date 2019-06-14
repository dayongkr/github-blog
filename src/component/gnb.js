import React, { useRef, useEffect } from 'react';
import statusBar from './statusBar';
import './gnb.css';

function useGnb(target, postHeader, headerTitle) {
  const header = useRef();
  function checkScroll() {
    if (window.scrollY >= postHeader.current.offsetHeight) {
      header.current.style.transform = 'translateY(0px)';
      header.current.style.opacity = '1';
    } else if (window.scrollY <= postHeader.current.offsetHeight) {
      header.current.style.transform = 'translateY(-100%)';
      header.current.style.opacity = '0';
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <>
      <header
        ref={header}
        style={{ transform: 'translateY(-100%)', opacity: 0 }}
      >
        <h1>{headerTitle}</h1>
        {statusBar(target, header)}
      </header>
    </>
  );
}

export default useGnb;
