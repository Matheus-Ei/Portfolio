// Library
import { motion } from 'framer-motion';

// Local
import { TechnologyType } from 'services/technology/types';

interface HoverNameProps {
  tech: TechnologyType;
  show: boolean;
}

const HoverName = ({ tech, show }: HoverNameProps) => {
  if (!show) return null;

  return (
    <motion.div
      className='absolute bottom-0 z-20'
      initial={{ opacity: 0.2, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <p className='text-sm text-center w-full whitespace-nowrap'>
        {tech.title}
      </p>
    </motion.div>
  );
};

export default HoverName;
