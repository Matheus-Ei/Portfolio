// Library
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Local
import AddProject from './AddProject';
import AddTech from './AddTech';

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
    <motion.div
      className='relative flex flex-col bg-base-300 w-screen h-24 items-center select-none'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
    >
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
        <AddTech />
      </div>
    </motion.div>
  );
};

export default Footer;
