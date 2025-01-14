// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';
import { TechnologyType } from 'services/technologies/types';

interface TechnologiesProps {
  data: CompleteProjectType;
}

const Technologies = ({ data }: TechnologiesProps) => {
  return (
    <div className='flex gap-2 items-center'>
      {data?.technologies?.map((tech: TechnologyType) => {
        const techIcon = tech.logo.split(' ');

        return (
          <motion.div whileHover={{ scale: 1.1 }}>
            <Icon
              value={{ name: techIcon[0], library: techIcon[1] }}
              className='text-3xl hover:text-primary'
              key={tech.name}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Technologies;
