// Libraries
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface ButtonProps {
  children?: JSX.Element;
  inverse?: boolean;
  text?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  inverse,
  text,
  onClick,
  className,
}: ButtonProps) => {
  const rawCss = clsx(
    'border border-primary w-fit h-fit px-14 py-2 rounded-btn font-bold',
    {
      'bg-primary text-primary-content': inverse,
      'bg-base-100 text-primary': !inverse,
    },
  );
  const css = twMerge(rawCss, className);

  return (
    <motion.button
      className={css}
      onClick={() => onClick && onClick()}
      whileHover={{ scale: 0.98 }}
      whileTap={{ opacity: 0.8 }}
    >
      {children ? children : <h1>{text}</h1>}
    </motion.button>
  );
};

export default Button;
