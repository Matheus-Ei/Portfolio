// Local
import Calendar from 'components/Calendar';
import ImageUploader from 'components/ImageUploader';
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from '../context';

const LeftHeader = () => {
  const { startDate, logo, endDate } = useSafeContext(CreateProjectContext);

  return (
    <div className='flex flex-col items-center justify-center w-1/4'>
      <ImageUploader onChange={(image) => logo.set(image)} />

      <div className='flex items-center justify-center gap-x-4 w-full'>
        <Calendar
          selected={startDate.value}
          onChange={(e) => startDate.set(e)}
          placeholder='Start date'
        />

        <Calendar
          selected={endDate.value}
          onChange={(e) => endDate.set(e)}
          placeholder='End date'
        />
      </div>
    </div>
  );
};

export default LeftHeader;
