// Local
import Input from 'components/Input';
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from '../context';

const RightHeader = () => {
  const { title, description } = useSafeContext(CreateProjectContext);

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 w-3/4'>
      <Input
        placeholder='Title...'
        className='h-12 bg-base-200 border-2 border-base-300 m-0'
        setValue={title.set}
      />

      <Input
        placeholder='Description...'
        className='h-48 bg-base-200 border-2 border-base-300 m-0'
        type='textarea'
        length={{ max: 500 }}
        setValue={description.set}
      />
    </div>
  );
};

export default RightHeader;
