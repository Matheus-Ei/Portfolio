// Local
import Icon from 'components/Icon';
import { useState } from 'react';
import { CompleteProjectType } from 'services/project/types';

interface SlideShowProps {
  data: CompleteProjectType;
}

const SlideShow = ({ data }: SlideShowProps) => {
  const [selected, setSelected] = useState<number>(0);

  const image = data?.images?.filter((img, index) => {
    if (index === selected) return img;

    return null;
  });

  if (!image) return null;

  const nextImg = () => {
    setSelected((prev) => {
      if (!data?.images?.length) return 0;
      if (prev === data?.images?.length - 1) return 0;

      const value = prev + 1;

      return value;
    });
  };

  const prevImg = () => {
    setSelected((prev) => {
      if (!data?.images?.length) return 0;
      if (prev === 0) return data?.images?.length - 1;

      const value = prev - 1;

      return value;
    });
  };

  return (
    <div className='rounded-box flex items-center h-72 mt-4 w-full gap-2 overflow-x-hidden'>
      <Icon
        value={{ name: 'GrPrevious', library: 'gr' }}
        className='text-xl mix-blend-difference absolute left-2 cursor-pointer'
        onClick={prevImg}
      />

      <img src={image[0]} alt='slide' className='object-contain w-full' />

      <Icon
        value={{ name: 'GrNext', library: 'gr' }}
        className='text-xl mix-blend-difference absolute right-2 cursor-pointer'
        onClick={nextImg}
      />
    </div>
  );
};

export default SlideShow;
