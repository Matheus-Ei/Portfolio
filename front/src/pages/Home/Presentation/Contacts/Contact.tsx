// Library
import { motion } from 'framer-motion';

// Local
import Icon from 'components/Icon';
import { IconType } from 'types/global';

interface ContactType {
  field: string;
  value: string;
  icon: IconType;
}

interface ItemProps {
  contact: ContactType;
}

const Contact = ({ contact }: ItemProps) => {
  const openLink = () => {
    if (contact.field === 'mail') return window.open(`mailto:${contact.value}`);
    window.open(`${contact.value}`);
  };

  return (
    <motion.div
      className='flex items-center justify-start hover:text-primary'
      whileHover={{ scale: 1.1 }}
      whileTap={{ opacity: 0.8 }}
      initial={{ scale: 1.5 }}
      animate={{ scale: 1 }}
    >
      <Icon value={contact.icon} onClick={openLink} className='text-4xl' />
    </motion.div>
  );
};

export default Contact;
