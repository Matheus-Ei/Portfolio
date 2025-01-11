// Libraries
import { useEffect, ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const withLoader = (WrappedComponent: ComponentType, checkLogin?: boolean) => {
  return function WithLoader() {
    const navigate = useNavigate();

    const check = () => {
      // if (checkLogin) User.verifyLogin(navigate);
      // Check if the user is logged in
      // If not, redirect to the login page
    };

    useEffect(check, [navigate]);

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
