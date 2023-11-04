import React, { useState, useEffect, Fragment } from 'react';
import Staple from './staple';
import { setFPSColors } from './calculate-fps-color';
import { setFPSEmoji } from './calculate-fps-emoji';
 
const Chart = () => {
  const [fpsArray, setFpsArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [fpsColor, setFpsColor] = useState('green');
  const [emoji, setEmoji] = useState('U+1F604');
  const [displayFps, setDisplayFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastFrameTime = performance.now();
    let animationFrameId; // Store the animation frame ID

    const updateFPS = () => {
      const newTime = performance.now();
      const elapsed = newTime - lastFrameTime;
      frameCount++;

      if (elapsed >= 1000) {
        const newFps = frameCount / (elapsed / 1000);
        const newArray = [...fpsArray]; // Create a new array
        newArray.push(newFps);

        if (newArray.length > 11) {
          newArray.shift();
        }

        setFpsArray(newArray);
        setFpsColor(setFPSColors(newFps));
        setEmoji(setFPSEmoji(newFps))
        setDisplayFps(Math.round(newFps));

        frameCount = 0;
        lastFrameTime = newTime;
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(updateFPS);
    };

    // Start the initial animation frame
    animationFrameId = requestAnimationFrame(updateFPS);

    return () => {
      // Cleanup when the component unmounts
      cancelAnimationFrame(animationFrameId);
    };
  }, [fpsArray]);

  return (
    <div>
      <div className='absolute-text'>
        <p>FPS: <span style={{ color: fpsColor }}>{displayFps}</span><span>{emoji}</span></p>
        <p>MAX: 400</p>
      </div>
      <div id="barchart">
        {fpsArray.map((value, key) => {

          const number = Math.round(value)
          return (<Fragment key={key}>
               <Staple value={number} />
          </Fragment>)
        })}
      </div>
    </div>
  );
};

export default Chart;
