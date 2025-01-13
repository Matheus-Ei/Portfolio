import { useEffect, useState } from 'react';
import AddProject from './AddProject';

const Footer = () => {
  const [svgWidth, setSvgWidth] = useState(window.innerWidth);

  // To resize the elipse
  useEffect(() => {
    const handleResize = () => {
      setSvgWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative flex flex-col bg-base-300 w-screen h-24 items-center select-none'>
      <svg className='h-10 w-screen'>
        <ellipse
          cx={svgWidth / 2}
          ry='35'
          rx={svgWidth / 2 + 50}
          className='transition-transform transform fill-base-200'
        />
      </svg>

      <div className='flex items-center justify-center w-full gap-x-4 mt-4'>
        <h1 className='text-lg italic'>Matheus Eickhoff - 2025</h1>

        <AddProject />
      </div>
    </div>
  );
};

export default Footer;
