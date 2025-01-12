// Local
import DynamicBackground from 'components/DynamicBackground';
import Contacts from './Contacts';
import Presentation from './Presentation';
import Projects from './Projects';

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <DynamicBackground />

      <div className='z-0 flex flex-col items-center gap-2 w-4/6 md:w-5/6 xl:w-4/6 my-10'>
        <Presentation />
        <Contacts />

        <Projects />
      </div>
    </div>
  );
};

export default Home;
