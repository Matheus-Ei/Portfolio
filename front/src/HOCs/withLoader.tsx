// Libraries
import { ComponentType } from 'react';
import { motion } from 'framer-motion';

const withLoader = (WrappedComponent: ComponentType) => {
  return function WithLoader() {
    return (
      <motion.div
        key='wrapped'
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <WrappedComponent />
      </motion.div>
    );
  };
};

export default withLoader;
