// Library
import { useState } from 'react';

// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';
import useToggle from 'hooks/useToggle';
import FullImage from './FullImage';

interface SlideShowProps {
  data: CompleteProjectType;
}

const SlideShow = ({ data }: SlideShowProps) => {
  const [selected, setSelected] = useState<number>(0);
  const [fullImage, toggleFullImage] = useToggle(false);

  const image = data?.images?.filter((img, index) => {
    if (index === selected) return img;

    return null;
  });

  if (!image || !data?.images?.length) return null;

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

  const haveMoreImages = data?.images?.length && data?.images?.length > 1;

  return (
    <>
      <FullImage
        show={fullImage}
        src={image[0]}
        toggleShow={toggleFullImage}
        setSelected={setSelected}
        data={data}
      />

      <div className='relative rounded-box bg-gradient-to-bl from-base-100 to-base-300 border border-base-300 flex items-center justify-center h-72 w-full lg:w-3/4 xl:w-2/4 gap-2 overflow-x-hidden'>
        {haveMoreImages && (
          <Icon
            value={{ name: 'GrPrevious', library: 'gr' }}
            className='text-2xl mix-blend-difference absolute left-2 cursor-pointer hover:text-primary'
            onClick={prevImg}
          />
        )}

        <img
          src={image[0]}
          alt='slide'
          className='object-contain max-w-11/12 max-h-full border-x border-x-base-300'
          onClick={() => window.innerWidth > 1000 && toggleFullImage(true)}
        />

        {haveMoreImages && (
          <Icon
            value={{ name: 'GrNext', library: 'gr' }}
            className='text-2xl mix-blend-difference absolute right-2 cursor-pointer hover:text-primary'
            onClick={nextImg}
          />
        )}
      </div>
    </>
  );
};

export default SlideShow;
