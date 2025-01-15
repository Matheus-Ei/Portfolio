// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';
import Link from './Link';

interface LinksProps {
  data: CompleteProjectType;
}

const Links = ({ data }: LinksProps) => {
  return (
    <div className='flex flex-col'>
      <Link
        icon={{ name: 'FaServer', library: 'fa' }}
        value={data?.host_link}
      />

      <Link icon={{ name: 'FaCode', library: 'fa' }} value={data?.code_link} />
    </div>
  );
};

export default Links;
