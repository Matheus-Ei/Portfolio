// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import { IconType } from 'types/global';

interface LinkProps {
  value: string | undefined;
  icon: IconType;
}

const Link = ({ value, icon }: LinkProps) => {
  if (!value) return null;

  return (
    <motion.div className='flex items-center gap-2' whileTap={{ opacity: 0.8 }}>
      <Icon value={icon} className='text-primary text-xl' />

      <a className='underline' href={value} target='_blank'>
        {value}
      </a>
    </motion.div>
  );
};

export default Link;
