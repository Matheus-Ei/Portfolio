// Libraries
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface CardProps {
  children: JSX.Element;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const css = twMerge(
    'w-fit h-fit p-4',
    'flex flex-col items-center justify-center',
    'border rounded-box border-neutral bg-base-100',
    className,
  );

  return (
    <motion.div
      className={css}
      initial={{ scale: 0.9, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
