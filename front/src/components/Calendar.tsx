// Library
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { twMerge } from 'tailwind-merge';

interface CalendarProps {
  selected: Date | undefined | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
}

const Calendar = ({
  selected,
  onChange,
  placeholder,
  className,
}: CalendarProps) => {
  const css = twMerge(
    'bg-base-300 rounded-btn p-1 pl-2 outline-none text-base-content w-32',
    className,
  );

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat='dd/MM/yyyy'
      placeholderText={placeholder}
      className={css}
      isClearable
    />
  );
};

export default Calendar;
