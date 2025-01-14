// Local
import Input from 'components/Input';
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from './context';

const Links = () => {
  const { hostLink, codeLink } = useSafeContext(CreateProjectContext);

  return (
    <div className='flex items-center justify-center gap-4'>
      <Input
        placeholder='Host link...'
        className='h-12 bg-base-200 border-2 border-base-300 m-0'
        setValue={hostLink.set}
      />

      <Input
        placeholder='Code link...'
        className='h-12 bg-base-200 border-2 border-base-300 m-0'
        setValue={codeLink.set}
      />
    </div>
  );
};

export default Links;
