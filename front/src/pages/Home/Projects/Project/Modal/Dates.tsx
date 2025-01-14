// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';

interface DatesProps {
  data: CompleteProjectType;
}

const Dates = ({ data }: DatesProps) => {
  const startDate = data?.start_date;
  const endDate = data?.end_date;

  return (
    <div className='flex gap-x-2'>
      <Icon
        value={{ name: 'FaCalendarAlt', library: 'fa' }}
        className='text-lg text-primary'
      />

      <p>{startDate}</p>
      <Icon value={{ name: 'FaArrowRightLong', library: 'fa6' }} />
      <p>{endDate}</p>
    </div>
  );
};

export default Dates;
