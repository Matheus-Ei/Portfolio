// Local
import { IconType } from 'types/global';
import Contact from './Contact';

interface ContactType {
  field: string;
  value: string;
  icon: IconType;
}

const contacts: ContactType[] = [
  {
    field: 'mail',
    value: 't4igacomercial@gmail.com',
    icon: { name: 'IoMailSharp', library: 'io5' },
  },

  {
    field: 'github',
    value: 'https://github.com/Matheus-Ei',
    icon: { name: 'FaGithub', library: 'fa' },
  },

  {
    field: 'linkedin',
    value: 'https://www.linkedin.com/in/matheus-eickhoff-a00b33290/',
    icon: { name: 'FaLinkedin', library: 'fa' },
  },
];

const Contacts = () => {
  const renderContacts = (contact: ContactType) => (
    <Contact key={contact.field} contact={contact} />
  );

  return <div className='flex gap-x-6'>{contacts.map(renderContacts)}</div>;
};

export default Contacts;
