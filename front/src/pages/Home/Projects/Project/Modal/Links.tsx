// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';

interface LinksProps {
  data: CompleteProjectType;
}

const Links = ({ data }: LinksProps) => {
  return (
    <div className='flex flex-col'>
      {data?.host_link && (
        <div className='flex items-center gap-2'>
          <Icon
            value={{ name: 'FaServer', library: 'fa' }}
            className='text-primary text-xl'
          />

          <a className='underline' href={data?.host_link} target='_blank'>
            {data?.host_link}
          </a>
        </div>
      )}

      {data?.code_link && (
        <div className='flex items-center gap-2'>
          <Icon
            value={{ name: 'FaCode', library: 'fa' }}
            className='text-primary text-xl'
          />

          <a className='underline' href={data?.code_link} target='_blank'>
            {data?.code_link}
          </a>
        </div>
      )}
    </div>
  );
};

export default Links;
