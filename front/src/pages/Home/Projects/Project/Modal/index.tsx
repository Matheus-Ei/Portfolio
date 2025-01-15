// Library
import { useQuery } from 'react-query';

// Local
import Modal from 'components/Modal';
import ProjectService from 'services/project';
import Header from './Header';
import Links from './Links';
import SlideShow from './SlideShow';
import Technologies from './Technologies';

interface ProjectModalProps {
  id?: number;
  showModal: boolean;
  toggleModal: (value?: boolean | undefined) => void;
}

const ProjectModal = ({ id, showModal, toggleModal }: ProjectModalProps) => {
  const getData = () => ProjectService.get(id);
  const { data } = useQuery(['project-get', id], getData);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => toggleModal(false)}
      className='overflow-x-hidden h-screen sm:h-fit h-max-screen h-max-[75vh] p-2'
    >
      <div className='flex flex-col gap-4'>
        <Header data={data} />

        <Links data={data} />

        <Technologies data={data} />

        <SlideShow data={data} />
      </div>
    </Modal>
  );
};

export default ProjectModal;
