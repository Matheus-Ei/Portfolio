// Libraries
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import Card from '../Card';
import CloseButton from './CloseButton';
import Background from './Background';
import { AnimatePresence } from 'framer-motion';

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const defaultCss = clsx(
  'relative w-screen h-screen sm:w-[85vw] sm:h-[75vh] z-30',
  'flex flex-col items-start justify-start',
);

const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  // if (!isOpen) return null;
  const css = twMerge(defaultCss, className);

  return (
    <AnimatePresence>
      {isOpen && (
        <Background onClick={onClose}>
          <Card className='border-base-300 border-2'>
            <div className={css}>
              <CloseButton onClick={onClose} />
              {children}
            </div>
          </Card>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
