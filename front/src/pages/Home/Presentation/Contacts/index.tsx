// Local
import { IconType } from 'types/global';
import Contact from './Contact';
import { createElement, useEffect, useState } from 'react';

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
  const [displayContact, setContact] = useState<ContactType[]>([]);

  // Delay to each contact show off in order
  useEffect(() => {
    contacts.forEach((contact, index) => {
      setTimeout(
        () => {
          setContact((prev) => {
            const updatedContacts = [...prev];
            updatedContacts[index] = { ...contact };
            return updatedContacts;
          });
        },
        600 * (index + 1),
      );
    });
  }, []);

  const renderContacts = (contact: ContactType, index: number) =>
    createElement(Contact, { key: index, contact });

  return (
    <div className='absolute bottom-0 flex gap-x-6'>
      {displayContact.map(renderContacts)}
    </div>
  );
};

export default Contacts;
