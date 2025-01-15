interface ImageProps {
  src?: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className='h-40 mb-4'>
      <img
        src={src}
        alt={alt}
        className='w-full h-full rounded-btn object-cover'
      />
    </div>
  );
};

export default Image;
