import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Counter() {
    const navigate=useNavigate()
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }else{
        navigate('/success')
    }
  }, [count]);

  return (
    <div>
      <p>page exits in {count} seconds</p>
    </div>
  );
}

export default Counter;
