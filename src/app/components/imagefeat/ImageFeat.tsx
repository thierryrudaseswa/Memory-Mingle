// PhotoChanger.js
import React, { useState, useEffect } from 'react';

const photos = ['/images/photo1.jpg', '/images/photo2.jpg']; 

const PhotoChanger = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={photos[currentPhoto]} alt="My Photo" />
    </div>
  );
};

export default PhotoChanger;
