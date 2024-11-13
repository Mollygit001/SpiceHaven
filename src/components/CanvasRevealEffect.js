// CanvasRevealEffect.js
import React, { useRef, useEffect } from 'react';

const CanvasRevealEffect = ({ width, height, trigger }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawReveal = () => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(drawReveal);
    };

    if (trigger) {
      drawReveal();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} className="absolute inset-0" />;
};

export default CanvasRevealEffect;
