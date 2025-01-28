// Library
import { useQuery } from 'react-query';
import { useState } from 'react';

// Local
import ImageUploader from 'components/ImageUploader';
import Modal from 'components/Modal';
import MultiSelection from 'components/MultiSelection';
import TechnologyService from 'services/technology';
import ProjectService from 'services/project';
import { CreateProjectContext } from './context';
import { ErrorType } from 'types/global';
import Header from './Header';
import Footer from './Footer';
import Message from 'components/Message';
import Links from './Links';

interface AddProjectModalProps {
  showModal: boolean;
  toggleModal: (value?: boolean | undefined) => void;
}

const AddProjectModal = ({ showModal, toggleModal }: AddProjectModalProps) => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const [title, setTitle] = useState<string>('Title');
  const [description, setDescription] = useState<string>('Description');
  const [password, setPassword] = useState<string>('Password');

  const [hostLink, setHostLink] = useState<string>('');
  const [codeLink, setCodeLink] = useState<string>('');

  const [technologies, setTechnologies] = useState<Array<string>>([]);

  const [logo, setLogo] = useState<Array<string>>([]);
  const [images, setImages] = useState<Array<string>>([]);

  const [error, setError] = useState<ErrorType>({
    message: '',
    isError: false,
  });

  const createProject = async () => {
    const response = await ProjectService.create({
      logo: logo[0],
      title,
      description,
      start_date: startDate,
      end_date: endDate,
      technologies,
      code_link: codeLink,
      host_link: hostLink,
      images,
      password,
    });

    if (response !== true) {
      setError({ isError: true, message: response });
    }
    return response === true;
  };

  // Get the technologies in the database
  const getTechOptions = async () => {
    return await TechnologyService.getAll();
  };
  const { data: techOptions } = useQuery('technologies-get', getTechOptions);

  const contextValue = {
    logo: { value: logo, set: setLogo },
    title: { value: title, set: setTitle },
    description: { value: description, set: setDescription },
    password: { value: password, set: setPassword },

    startDate: { value: startDate, set: setStartDate },
    endDate: { value: endDate, set: setEndDate },
    technologies: { value: technologies, set: setTechnologies },
    images: { value: images, set: setImages },

    codeLink: { value: codeLink, set: setCodeLink },
    hostLink: { value: hostLink, set: setHostLink },

    error: { value: error, set: setError },
    modal: { show: showModal, toggle: toggleModal },
  };

  return (
    <CreateProjectContext.Provider value={contextValue}>
      <Modal
        isOpen={showModal}
        onClose={() => toggleModal(false)}
        className='overflow-x-hidden sm:h-fit p-2'
      >
        <div className='flex flex-col items-center w-full h-full gap-y-6'>
          <h1 className='text-3xl font-bold'>NEW PROJECT</h1>

          <div className='flex flex-col items-center w-10/12 gap-y-4'>
            <Header />

            <ImageUploader
              multiple={true}
              onChange={(image) => setImages(image)}
            />

            <MultiSelection
              selected={technologies}
              onChange={(e) => setTechnologies(e)}
              options={techOptions?.map((tech) => tech.title) || []}
            />

            <Links />
          </div>

          <Message
            text={error.message}
            box='text'
            type='error'
            isVisible={error.isError}
          />
          <Footer createProject={createProject} />
        </div>
      </Modal>
    </CreateProjectContext.Provider>
  );
};

export default AddProjectModal;
