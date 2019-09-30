import React, { useState } from 'react';

import TextWriter from './TextWriter';

const App = () => {
  const [startupPlaying, setStartupPlaying] = useState(true);
  const onWritingFinished = () => {
    setStartupPlaying(true);
  }
  return (
    <div className="dark d-flex col">
      <TextWriter
        text="./sullivanFord.sh"
        duration="1221"
        callback={onWritingFinished} />
    </div>
  )
}

export default App;
