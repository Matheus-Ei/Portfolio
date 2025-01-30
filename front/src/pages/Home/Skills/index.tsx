// Library
// import { useQuery } from 'react-query';
import { PuffLoader } from 'react-spinners';

// Local
import Icon from 'components/Icon';

const Skills = () => {
  // const getAllSkills = async () => await SkillService.getAll();
  // const { data } = useQuery('all-skills', getAllSkills);
  const data: String[] = [];

  const addSkill = (skill: any) => <div></div>;

  const renderSkills = () => {
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

          <h1 className='text-xl italic'>No skills added yet...</h1>
        </div>
      );

    return <div>{data.map(addSkill)}</div>;
  };

  return (
    <div className='flex flex-col gap-y-2 mt-10 mb-6 items-center select-none w-full'>
      <h1 className='font-bold text-5xl text-center md:text-start'>
        My Skills
      </h1>
      <p className='text-lg text-center md:text-start'>
        Here are some of the key skills I have developed over time
      </p>

      {renderSkills()}
    </div>
  );
};

export default Skills;
