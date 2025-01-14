// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import AddTechModal from './Modal';

const AddTech = () => {
  const [showModal, toggleModal] = useToggle(false);

  return (
    <>
      <motion.div
        className='flex items-center justify-center hover:text-primary'
        whileHover={{ scale: 1.1 }}
        whileTap={{ opacity: 0.8 }}
      >
        <Icon
          value={{ name: 'MdScience', library: 'md' }}
          className='text-2xl'
          onClick={() => toggleModal(true)}
        />
      </motion.div>

      <AddTechModal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default AddTech;
