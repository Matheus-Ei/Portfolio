// Local
import LeftHeader from './Left';
import RightHeader from './Right';

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-10 w-full'>
      <LeftHeader />

      <RightHeader />
    </div>
  );
};

export default Header;
