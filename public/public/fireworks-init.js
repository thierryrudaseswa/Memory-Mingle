// public/fireworks-init.js

// Load Fireworks.js from the CDN
const loadFireworks = async (container) => {
    const module = await import('https://unpkg.com/fireworks-js@2.6.0/dist/fireworks.js');
    const { default: Fireworks } = module;
  
    if (container) {
      const fireworks = new Fireworks(container, {
        speed: 3,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        autoresize: true,
        boundaries: {
          top: 50,
          bottom: container.clientHeight,
          left: 50,
          right: container.clientWidth
        },
        sound: {
          enable: true,
          files: [
            'https://www.soundjay.com/button/beep-07.wav',
            'https://www.soundjay.com/button/beep-08.wav',
            'https://www.soundjay.com/button/beep-09.wav'
          ],
          volume: {
            min: 4,
            max: 8
          }
        },
        mouse: {
          click: true,
          move: false,
          max: 1
        }
      });
      fireworks.start();
  
      return () => fireworks.stop();
    }
  };
  
  window.loadFireworks = loadFireworks;
  