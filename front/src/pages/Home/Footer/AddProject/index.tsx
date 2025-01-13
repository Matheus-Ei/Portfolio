// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import AddProjectModal from './Modal';
import useToggle from 'hooks/useToggle';

const AddProject = () => {
  const [showModal, toggleModal] = useToggle(false);

  return (
    <>
      <motion.div
        className='flex items-center justify-center hover:text-primary'
        whileHover={{ scale: 1.1 }}
        whileTap={{ opacity: 0.8 }}
      >
        <Icon
          value={{ name: 'IoIosAddCircle', library: 'io' }}
          className='text-2xl'
          onClick={() => toggleModal(true)}
        />
      </motion.div>

      <AddProjectModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default AddProject;
