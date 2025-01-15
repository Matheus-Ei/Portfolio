// Library
import { motion } from 'framer-motion';

// Local
import useToggle from 'hooks/useToggle';
import Footer from './Footer';
import Image from './Image';
import ProjectModal from './Modal';

interface ProjectProps {
  id?: number;
  title?: string;
  description?: string;
  logo?: string;
}

const Project = ({ id, title, description, logo }: ProjectProps) => {
  const [showModal, toggleModal] = useToggle(false);

  return (
    <>
      <motion.div
        className='relative flex flex-col bg-gradient-to-br from-base-100 to-base-300 text-base-content min-w-52 max-w-80 h-96 rounded-box border-2 border-base-300 p-2 select-none cursor-pointer'
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        whileTap={{ opacity: 0.8, transition: { duration: 0.1 } }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => toggleModal(true)}
      >
        <Image src={logo} alt='Icon' />

        <h1 className='font-bold text-3xl'>{title}</h1>

        <p className='text-lg line-clamp-4'>{description}</p>
        <Footer />
      </motion.div>

      <ProjectModal id={id} showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Project;
