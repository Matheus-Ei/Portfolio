// Local
import Icon from 'components/Icon';
import { CompleteProjectType } from 'services/project/types';
import { SetStateType } from 'types/global';

interface FullImageProps {
  src: string;
  show: boolean;
  toggleShow: (value?: boolean | undefined) => void;
  setSelected: SetStateType<number>;
  data: CompleteProjectType;
}

const FullImage = ({
  src,
  show,
  toggleShow,
  setSelected,
  data,
}: FullImageProps) => {
  if (!show) return null;

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
    <div className='fixed flex items-center justify-center z-30 w-screen h-screen top-0 left-0 p-20'>
      <div
        className='fixed w-screen h-screen top-0 left-0 bg-black opacity-20 z-10'
        onClick={() => toggleShow(false)}
      />

      <div className='relative flex items-center justify-center z-20 max-w-[80vw] h-[80vh] p-12'>
        <Icon
          value={{ name: 'IoMdClose', library: 'io' }}
          onClick={() => toggleShow(false)}
          className='absolute top-4 right-4 text-3xl mix-blend-exclusion cursor-pointer hover:text-primary'
        />

        {haveMoreImages && (
          <Icon
            value={{ name: 'GrPrevious', library: 'gr' }}
            className='text-3xl mix-blend-difference absolute left-2 cursor-pointer hover:text-primary'
            onClick={prevImg}
          />
        )}

        <img
          src={src}
          alt='slide'
          className='object-cover h-full w-full rounded-box border-2 border-primary'
        />

        {haveMoreImages && (
          <Icon
            value={{ name: 'GrNext', library: 'gr' }}
            className='text-3xl mix-blend-difference absolute right-2 cursor-pointer hover:text-primary'
            onClick={nextImg}
          />
        )}
      </div>
    </div>
  );
};

export default FullImage;
