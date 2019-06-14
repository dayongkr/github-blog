import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import useStatus from './component/useStatus';
import './atom-one-dark.css';
import './index.css';

function App() {
  const target = useRef();
  const [postFileUrl, setPostFileUrl] = useState('post/test.json');
  const [header, setHeader] = useState({
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    title: '자바스크립트 공부, Num.isNaN',
    category: 'Javascript',
    date: '2019-06-01',
    body: '안녕',
  });
  const getContent = async url => {
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('title').innerText = `블로그 ${data.title}`;
    return setHeader(data);
  };
  useEffect(() => {
    setPostFileUrl('post/test.json');
    getContent(postFileUrl);
    hljs.initHighlightingOnLoad();
  }, [postFileUrl]);
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
      <div
        id="postBodyWrapper"
        ref={target}
        dangerouslySetInnerHTML={{ __html: header.body }}
      />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
