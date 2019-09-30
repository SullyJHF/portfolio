import React, {useState, useEffect} from 'react';

const TextWriter = ({text, duration, callback}) => {
  const cursorText = '█';
  const [displayText, setDisplayText] = useState('');
  const [cursorPos, setCursorPos] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [cbCalled, setCbCalled] = useState(false);

  useEffect(() => {
    let cursorInterval, typingInterval;
    if (!typing) {
      cursorInterval = setInterval(() => {
        setCursorVisible(!cursorVisible);
      }, 444);
    } else if (cursorPos < text.length){
      setCursorVisible(true);
      typingInterval = setInterval(() => {
        setDisplayText(displayText + text[cursorPos]);
        setCursorPos(cursorPos + 1);
      }, (duration / text.length) + Math.random() * 40 - 20);
    } else if (!done) {
      setTyping(false);
      setDone(true);
    }

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setTyping(true);
    }, 1333);
  }, []);

  useEffect(() => {
    if (!done) return;
    setTimeout(() => {
      setTyping(true);
      setCursorVisible(false);
      setCbCalled(true);
      callback();
    }, 2000);
  }, [done]);

  return (
    <div className={`d-flex terminal larger full-width ${cbCalled ? 'hide' : 'highlight'}`}>
      <p className="yellow">~$&nbsp;</p>
      <p className={done ? 'green' : 'red'}>{displayText}</p>
      <p className="white">{cursorVisible ? cursorText : ''}</p>
    </div>
  )
}

export default TextWriter;
