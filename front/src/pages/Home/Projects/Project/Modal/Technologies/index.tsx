// Local
import { CompleteProjectType } from 'services/project/types';
import { TechnologyType } from 'services/technologies/types';
import Tech from './Tech';

interface TechnologiesProps {
  data: CompleteProjectType;
}

const Technologies = ({ data }: TechnologiesProps) => {
  return (
    <div className='flex gap-2 items-center ml-2'>
      {data?.technologies?.map((tech: TechnologyType) => {
        return <Tech tech={tech} />;
      })}
    </div>
  );
};

export default Technologies;
