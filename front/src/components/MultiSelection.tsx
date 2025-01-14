import { ChangeEvent } from 'react';

interface MultiSelectionProps {
  selected: Array<string>;
  options: Array<string>;
  onChange: (selected: Array<string>) => void;
  placeholder?: string;
}

const MultiSelection = ({
  selected,
  options,
  onChange,
  placeholder,
}: MultiSelectionProps) => {
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );

    onChange(selectedValues);
  };

  const renderOptions = () => {
    if (!options) return null;

    return options.map((option) => (
      <option
        key={option}
        value={option}
        className='selected:bg-primary selected:text-primary-content bg-base-200 text-base-content selected:border-none'
      >
        {option}
      </option>
    ));
  };

  return (
    <select
      multiple
      value={selected}
      onChange={handleSelectionChange}
      className='h-32 p-2 border-2 border-base-300 rounded-btn text-base-content bg-base-200'
    >
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}

      {renderOptions()}
    </select>
  );
};

export default MultiSelection;
