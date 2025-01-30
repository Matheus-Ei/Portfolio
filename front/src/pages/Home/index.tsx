// Local
import DynamicBackground from 'components/DynamicBackground';
import Presentation from './Presentation';
import Projects from './Projects';
import Footer from './Footer';
import Skills from './Skills';

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <DynamicBackground />

      <div className='z-20 flex flex-col items-center gap-2 w-4/6 md:w-5/6 xl:w-4/6 mt-10'>
        <Presentation />

        <Projects />
        <Skills />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
