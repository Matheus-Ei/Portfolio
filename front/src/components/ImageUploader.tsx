import React, { useState } from 'react';
import Icon from './Icon';

interface ImageUploaderProps {
  multiple?: boolean;
  onChange: (images: string[]) => void;
}

const ImageUploader = ({ multiple = false, onChange }: ImageUploaderProps) => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;

    if (!files) return;

    const filePromises = Array.from(files).map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) resolve(reader.result.toString());
        };
        reader.onerror = () => reject('Failed to read file');
        reader.readAsDataURL(file);
      });
    });

    try {
      const base64Images = await Promise.all(filePromises);
      const updatedImages = multiple
        ? [...images, ...base64Images]
        : base64Images;
      setImages(updatedImages);
      onChange(updatedImages);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onChange(updatedImages);
  };

  const renderPreviews = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={`relative ${multiple && 'w-24 h-24'} p-2 ${!multiple && 'w-48 h-48'}`}
      >
        <img
          src={image}
          alt={`Uploaded preview ${index}`}
          className='w-full h-full object-cover rounded'
        />

        <Icon
          onClick={() => handleRemoveImage(index)}
          className='absolute top-0 right-0 bg-error text-error-content p-1 rounded-btn cursor-pointer text-2xl'
          value={{ name: 'FaTrashAlt', library: 'fa' }}
        />
      </div>
    ));
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        type='file'
        accept='image/*'
        multiple={multiple}
        onChange={handleImageUpload}
        className='mb-2'
      />
      <div className='grid grid-flow-col auto-cols-fr overflow-y-hidden'>
        {renderPreviews()}
      </div>
    </div>
  );
};

export default ImageUploader;
