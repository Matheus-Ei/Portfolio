// Library
import { useState } from 'react';

// Local
import Modal from 'components/Modal';
import TechnologyService from 'services/technology';
import { AddTechContext } from './context';
import { ErrorType } from 'types/global';
import Message from 'components/Message';
import Footer from './Footer';
import Body from './Body';

interface AddProjectModalProps {
  showModal: boolean;
  toggleModal: (value?: boolean | undefined) => void;
}

const AddTechModal = ({ showModal, toggleModal }: AddProjectModalProps) => {
  const [name, setName] = useState<string>('Name');
  const [password, setPassword] = useState<string>('Password');

  const [logo, setLogo] = useState<string>('FaCode fa');

  const [error, setError] = useState<ErrorType>({
    message: '',
    isError: false,
  });

  const addTech = async () => {
    const response = await TechnologyService.create({
      icon: logo,
      title: name,
      password,
    });

    if (response !== true) {
      setError({ isError: true, message: String(response) });
    }

    return response === true;
  };

  const contextValue = {
    logo: { value: logo, set: setLogo },
    name: { value: name, set: setName },
    password: { value: password, set: setPassword },

    error: { value: error, set: setError },
    modal: { show: showModal, toggle: toggleModal },
  };

  return (
    <AddTechContext.Provider value={contextValue}>
      <Modal
        isOpen={showModal}
        onClose={() => toggleModal(false)}
        className='overflow-x-hidden md:w-[50vw] lg:w-[40vw] xl:w-[30vw] sm:h-fit p-2'
      >
        <div className='flex flex-col items-center w-full h-full gap-y-6'>
          <h1 className='text-3xl font-bold'>ADD TECHNOLOGY</h1>
          <Body />

          <Message
            text={error.message}
            box='text'
            type='error'
            isVisible={error.isError}
          />

          <Footer addTech={addTech} />
        </div>
      </Modal>
    </AddTechContext.Provider>
  );
};

export default AddTechModal;
