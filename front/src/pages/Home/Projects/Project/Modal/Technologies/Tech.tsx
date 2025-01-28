// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import { TechnologyType } from 'services/technology/types';
import HoverName from './HoverName';

interface TechProps {
  tech: TechnologyType;
}

const Tech = ({ tech }: TechProps) => {
  const [showName, toggleName] = useToggle(false);
  const techIcon = tech.icon.split(' ');

  return (
    <div className='relative flex flex-col items-center pb-6'>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onMouseOut={() => toggleName(false)}
        onMouseOver={() => toggleName(true)}
      >
        <Icon
          value={{ name: techIcon[0], library: techIcon[1] }}
          className='text-4xl hover:text-primary'
          key={tech.title}
        />
      </motion.div>

      <HoverName tech={tech} show={showName} />
    </div>
  );
};

export default Tech;
