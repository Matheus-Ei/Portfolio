// Library
import React, { useState, useEffect } from 'react';

const DynamicBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderCircles = () => {
    const circles = [];

    if (window.innerWidth < 1000 || window.innerHeight < 500) {
      return null;
    }

    const smallRadius = 100;
    const midRadius = 150;
    const bigRadius = 200;

    const numCirclesX = 60;
    const numCirclesY = 40;

    for (let i = 0; i <= numCirclesX; i++) {
      for (let j = 0; j <= numCirclesY; j++) {
        const cx = (i * window.innerWidth) / numCirclesX;
        const cy = (j * window.innerHeight) / numCirclesY;
        const distance = Math.sqrt(
          (mousePosition.x - cx) ** 2 + (mousePosition.y - cy) ** 2,
        );

        const inBigRadius = distance < bigRadius;
        const inMidRadius = distance < midRadius;
        const inSmallRadius = distance < smallRadius;

        const fillClass = inBigRadius ? 'fill-base-200' : 'fill-base-200';
        const radiusSize = inSmallRadius
          ? '4'
          : inMidRadius
            ? '3'
            : inBigRadius
              ? '2'
              : '1';

        circles.push(
          <circle
            key={`${i}-${j}`}
            cx={`${(i * 100) / numCirclesX}%`}
            cy={`${(j * 100) / numCirclesY}%`}
            r={radiusSize}
            className={`transition-transform transform ${fillClass}`}
          />,
        );
      }
    }

    return circles;
  };

  return (
    <div className='fixed w-screen h-screen bg-cover'>
      <svg className='w-screen h-screen z-0'>
        <g>{renderCircles()}</g>
      </svg>
    </div>
  );
};

export default DynamicBackground;
