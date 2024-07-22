// components/Fireworks.tsx
"use client";
import { useEffect, useRef } from "react";

const Fireworks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadFireworksScript = async () => {
      const script = document.createElement("script");
      script.src = "/fireworks-init.js";
      script.onload = () => {
        if (containerRef.current) {
          window.loadFireworks(containerRef.current);
        }
      };
      document.body.appendChild(script);
    };

    loadFireworksScript();

    return () => {
      const script = document.querySelector('script[src="/fireworks-init.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0"></div>;
};

export default Fireworks;
