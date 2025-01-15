// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';

interface DatesProps {
  data: CompleteProjectType;
}

const toLocale = (date?: Date | null) => {
  if (!date)
    return (
      <Icon value={{ name: 'MdTimer', library: 'md' }} className='text-lg' />
    );

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const Dates = ({ data }: DatesProps) => {
  const startDate = data?.start_date ? new Date(data.start_date) : null;
  const endDate = data?.end_date ? new Date(data.end_date) : null;

  return (
    <div className='flex items-center gap-x-2'>
      <Icon
        value={{ name: 'FaCalendarAlt', library: 'fa' }}
        className='text-lg text-primary'
      />

      <p>{toLocale(startDate)}</p>
      <Icon value={{ name: 'FaArrowRightLong', library: 'fa6' }} />
      <p>{toLocale(endDate)}</p>
    </div>
  );
};

export default Dates;
