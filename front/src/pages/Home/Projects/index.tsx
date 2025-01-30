// Library
import { useQuery } from 'react-query';

// Local
import Project from './Project';
import { ProjectType } from 'services/project/types';
import ProjectService from 'services/project';
import Icon from 'components/Icon';
import { PuffLoader } from 'react-spinners';

const Projects = () => {
  const getAllProjects = async () => await ProjectService.getAll();
  const { data } = useQuery('all-projects', getAllProjects);

  const addProject = (project: ProjectType) => (
    <Project
      id={project.id}
      title={project.title}
      key={project.title}
      description={project.description}
      logo={project.logo}
    />
  );

  const renderProject = () => {
    if (!data)
      return (
        <div className='flex justify-center gap-4 h-fit w-full mt-4'>
          <PuffLoader color='white' size={100} />
        </div>
      );

    if (!data.length)
      return (
        <div className='flex justify-center gap-4 h-64 w-full mt-4'>
          <Icon
            value={{ name: 'FaBucket', library: 'fa6' }}
            className='text-4xl text-primary'
          />

          <h1 className='text-xl italic'>No projects added yet...</h1>
        </div>
      );

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        {data.map(addProject)}
      </div>
    );
  };

  return (
    <div className='flex flex-col gap-y-2 mt-10 mb-6 items-center select-none w-full'>
      <h1 className='font-bold text-5xl text-center md:text-start'>My Work</h1>
      <p className='text-lg text-center md:text-start'>
        A collection of projects I've worked on
      </p>

      {renderProject()}
    </div>
  );
};

export default Projects;
