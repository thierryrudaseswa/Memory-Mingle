import React, { useEffect } from 'react';
import * as THREE from 'three';

const RotatingEarth: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earthmap1k.jpg');
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 10;

    const animate = function () {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default RotatingEarth;
