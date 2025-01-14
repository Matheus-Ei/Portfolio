// Local
import Button from 'components/Button';
import Input from 'components/Input';
import useSafeContext from 'hooks/useSafeContext';
import { AddTechContext } from './context';

interface FooterProps {
  addTech: () => Promise<boolean>;
}

const Footer = ({ addTech }: FooterProps) => {
  const { password, modal } = useSafeContext(AddTechContext);

  const handleClick = () => {
    addTech().then((res) => res && modal.toggle(false));
  };

  return (
    <div className='flex items-center justify-center gap-x-4 w-full px-4'>
      <Button text='Add' inverse={true} onClick={handleClick} />

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
