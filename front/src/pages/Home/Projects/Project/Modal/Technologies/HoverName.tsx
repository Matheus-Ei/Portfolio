// Library
import { motion } from 'framer-motion';

// Local
import { TechnologyType } from 'services/technologies/types';

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
      animate={{ opacity: 1, x:0 }}
    >
      <p className='text-sm text-center'>{tech.name}</p>
    </motion.div>
  );
};

export default HoverName;
