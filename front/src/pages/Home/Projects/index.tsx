// Local
import Project from './Project';
import logo from 'file:///home/t4iiga/Downloads/DALL%C2%B7E%202025-01-12%2017.54.26%20-%20A%20cartoon-style%20illustration%20with%20bold,%20clean%20lines%20featuring%20a%20green-painted%20robot%20holding%20a%20folder%20with%20an%20email%20logo%20on%20its%20front.%20The%20robot%20is%20sit.webp';

const Projects = () => {
  return (
    <div className='flex flex-col gap-y-2 mt-10 items-center select-none w-full'>
      <h1 className='font-bold text-5xl text-center md:text-start'>My Work</h1>
      <p className='text-lg text-center md:text-start'>
        A collection of projects I've worked on
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <Project
          title='Anes'
          description='A platform that make webscrapp of licitations and send it to users via email, with a lot of filters and options.'
          logo={logo}
        />
      </div>
    </div>
  );
};

export default Projects;
