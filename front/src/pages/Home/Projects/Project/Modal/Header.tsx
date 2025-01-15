// Local
import { CompleteProjectType } from 'services/project/types';
import Dates from './Dates';

interface HeaderProps {
  data: CompleteProjectType;
}

const Header = ({ data }: HeaderProps) => {
  return (
    <div className='flex items-center gap-x-10'>
      <div className='w-52 h-52'>
        <img
          src={data?.logo}
          alt='project-logo'
          className='object-cover w-full h-full rounded-btn'
        />
      </div>

      <div className='flex flex-col w-3/5 gap-y-2 select-text'>
        <h1 className='text-4xl font-bold'>{data?.title}</h1>

        <p>{data?.description}</p>

        <Dates data={data} />
      </div>
    </div>
  );
};

export default Header;
