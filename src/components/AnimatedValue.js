import React, { useEffect, useState } from 'react';

function AnimatedValue({ initialValue, toValue, duration }) {
    const [currentValue, setCurrentValue] = useState(initialValue);
  
    useEffect(() => {
      let startTime;
  
      function animate(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const elapsedTime = timestamp - startTime;
  
        if (elapsedTime < duration) {
          const animatedValue = (elapsedTime / duration) * (toValue - initialValue) + initialValue;
          setCurrentValue(Math.round(animatedValue));
          requestAnimationFrame(animate);
        } else {
          setCurrentValue(toValue);
        }
      }
  
      requestAnimationFrame(animate);
    }, [duration, toValue, initialValue]);
  
    return <span style={{fontSize: "3rem"}}>{currentValue}</span>;
  }

  export default AnimatedValue;