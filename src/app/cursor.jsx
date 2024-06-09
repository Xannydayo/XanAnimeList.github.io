import React, { useState } from 'react';
import styles from './styles.module.css'; // Gantilah dengan path file CSS Anda

const MyComponent = () => {
  const [hideCursor, setHideCursor] = useState(false);

  const handleMouseEnter = () => {
    setHideCursor(true);
  };

  const handleMouseLeave = () => {
    setHideCursor(false);
  };

  return (
    <div
      className={hideCursor ? styles.hiddenCursor : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Konten Anda di sini
    </div>
  );
};

export default MyComponent;
