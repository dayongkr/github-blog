import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useStatus from './component/useStatus';
import './index.css';

function App() {
  const target = useRef();
  const [header, setHeader] = useState({
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    title: '자바스크립트 공부, Num.isNaN',
    category: 'Javascript',
    date: '2019-06-01',
  });
  const [bodyContent, setBodyContent] = useState('안녕안녕');
  useEffect(() => {
    setHeader({
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      title: '자바스크립트 공부, Num.isNaN',
      category: 'Javascript',
      date: '2019-06-01',
    });
    setBodyContent('안녕안녕');
  }, []);
  return (
    <>
      {useStatus(target)}
      <div
        id="postHeaderWrapper"
        style={{ backgroundImage: `url(${header.url})` }}
      >
        <h1 id="postHeaderTitle">{header.title}</h1>
        <hr id="postHeaderHr" />
        <div id="postHeaderDetails">
          <span id="postHeaderCategory">{header.category}</span>
          <span id="postHeaderDay">{header.date}</span>
        </div>
      </div>
      <div id="postBodyWrapper" ref={target}>
        {bodyContent}
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
