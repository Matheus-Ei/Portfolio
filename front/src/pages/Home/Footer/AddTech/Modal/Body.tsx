// Local
import Icon from 'components/Icon';
import Input from 'components/Input';
import useSafeContext from 'hooks/useSafeContext';
import { AddTechContext } from './context';

const Body = () => {
  const { name, description, logo } = useSafeContext(AddTechContext);

  const iconView = logo.value.split(' ');

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 w-full'>
      <Input
        placeholder='Name...'
        className='h-12 bg-base-200 border-2 border-base-300 m-0'
        setValue={name.set}
      />

      <Input
        placeholder='Description...'
        className='h-48 bg-base-200 border-2 border-base-300 m-0'
        type='textarea'
        length={{ max: 500 }}
        setValue={description.set}
      />

      <div className='flex items-center justify-center w-2/4 gap-x-4'>
        <Icon
          value={{ name: iconView[0], library: iconView[1] }}
          className='text-4xl text-primary'
        />
        <Input
          placeholder='Logo... { FaCode fa }'
          className='w-full bg-base-200 border-2 border-base-300 m-0'
          setValue={logo.set}
        />
      </div>
    </div>
  );
};

export default Body;
