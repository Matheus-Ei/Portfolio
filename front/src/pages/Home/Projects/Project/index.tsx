// Library
import { motion } from 'framer-motion';
import Image from './Image';

interface ProjectProps {
  title: string;
  description: string;
  logo: any;
}

const Project = ({ title, description, logo }: ProjectProps) => {
  return (
    <motion.div
      className='flex flex-col bg-primary text-primary-content min-w-52 max-w-80 h-96 rounded-box border-2 border-base-300 p-2 select-none cursor-pointer'
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ opacity: 0.9, transition: { duration: 0.1 } }}
    >
      <Image src={logo} alt='Icon' />

      <h1 className='font-bold text-3xl'>{title}</h1>

      <p className='text-lg'>{description}</p>
    </motion.div>
  );
};

export default Project;
