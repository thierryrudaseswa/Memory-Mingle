import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const stars = 800;
    const colorrange = [0, 60, 240];

    if (canvas && context) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvas.offsetWidth;
        const y = Math.random() * canvas.offsetHeight;
        const radius = Math.random() * 1.2;
        const hue = colorrange[parseInt(String(Math.random() * colorrange.length))];
        const sat = Math.floor(Math.random() * 60) + 30;
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = `hsl(${hue}, ${sat}%, 88%)`;
        context.fill();
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="stars"></canvas>;
};

export default StarryBackground;
