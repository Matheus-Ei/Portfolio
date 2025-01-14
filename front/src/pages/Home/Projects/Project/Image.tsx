interface ImageProps {
  src?: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className='relative h-40'>
      <img
        src={src}
        alt={alt}
        className='w-full h-full rounded-btn object-cover'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-primary from-20% to-transparent to-80%' />
    </div>
  );
};

export default Image;
