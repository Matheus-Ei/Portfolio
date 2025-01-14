// Local
import Button from 'components/Button';
import Input from 'components/Input';
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from './context';

interface FooterProps {
  createProject: () => Promise<boolean>;
}

const Footer = ({ createProject }: FooterProps) => {
  const { password, modal } = useSafeContext(CreateProjectContext);

  const handleClick = () => {
    createProject().then((res) => res && modal.toggle(false));
  };

  return (
    <div className='flex items-center justify-center gap-x-4 w-3/5'>
      <Button text='Create' inverse={true} onClick={handleClick} />

      <Input
        placeholder='Password...'
        className='h-12 bg-base-200 border-2 border-base-300 m-0'
        setValue={password.set}
        isPassword
      />
    </div>
  );
};

export default Footer;
