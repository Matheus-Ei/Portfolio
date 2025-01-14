import Button from 'components/Button';
import Calendar from 'components/Calendar';
import ImageUploader from 'components/ImageUploader';
import Input from 'components/Input';
import Modal from 'components/Modal';
import MultiSelection from 'components/MultiSelection';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ProgrammingLanguageService from 'services/ProgrammingLanguage';
import ProjectService from 'services/project';

interface AddProjectModalProps {
  showModal: boolean;
  toggleModal: (value?: boolean | undefined) => void;
}

const AddProjectModal = ({ showModal, toggleModal }: AddProjectModalProps) => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const [title, setTitle] = useState<string>('Title');
  const [description, setDescription] = useState<string>('Description');

  const [programmingLangs, setProgrammingLangs] = useState<Array<string>>([]);

  const [logo, setLogo] = useState<Array<string>>([]);
  const [images, setImages] = useState<Array<string>>([]);

  const createProject = async () => {
    if (!title || !description || !startDate || !logo[0]) return null;

    await ProjectService.create({
      logo: logo[0],
      title,
      description,
      start_date: startDate,
      end_date: endDate,
      programming_languages: programmingLangs,
      images,
    });
  };

  // Get the programming languages in the database
  const getProgrammingLangOptions = async () => {
    return await ProgrammingLanguageService.getAll();
  };
  const { data: programmingLangOptions } = useQuery(
    'programming-lang-get',
    getProgrammingLangOptions,
  );

  return (
    <Modal
      isOpen={showModal}
      onClose={() => toggleModal(false)}
      className='overflow-x-hidden'
    >
      <div className='flex flex-col items-center w-full h-full gap-y-6'>
        <h1 className='text-3xl font-bold'>NEW PROJECT</h1>

        <div className='flex flex-col items-center w-3/4 gap-y-4'>
          <div className='flex items-center justify-center gap-x-10 w-full'>
            <div className='flex flex-col items-center justify-center w-1/4'>
              <ImageUploader onChange={(image) => setLogo(image)} />

              <div className='flex items-center justify-center gap-x-4 w-full'>
                <Calendar
                  selected={startDate}
                  onChange={(e) => setStartDate(e)}
                  placeholder='Start date'
                />

                <Calendar
                  selected={endDate}
                  onChange={(e) => setEndDate(e)}
                  placeholder='End date'
                />
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-4 w-3/4'>
              <Input
                placeholder='Title...'
                className='h-12 bg-base-200 border-2 border-base-300 m-0'
                setValue={setTitle}
              />

              <Input
                placeholder='Description...'
                className='h-48 bg-base-200 border-2 border-base-300 m-0'
                type='textarea'
                setValue={setDescription}
              />
            </div>
          </div>

          <ImageUploader
            multiple={true}
            onChange={(image) => setImages(image)}
          />

          <MultiSelection
            selected={programmingLangs}
            onChange={(e) => setProgrammingLangs(e)}
            options={programmingLangOptions?.map((item) => item.name) || []}
          />
        </div>

        <div className='flex items-center justify-center gap-x-4 w-2/5'>
          <Button text='Create' inverse={true} onClick={createProject} />
          <Input
            placeholder='Password...'
            className='h-12 bg-base-200 border-2 border-base-300 m-0'
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddProjectModal;
