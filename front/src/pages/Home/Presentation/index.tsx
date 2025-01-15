// Library
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Local
import developerImage from 'assets/developer.jpg';
import Contacts from './Contacts';

const Presentation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequencia = async () => {
      await controls.start({ opacity: 1, transition: { duration: 1 } });

      await controls.start({
        borderColor: '#009FDA',
        borderRadius: 20,
        transition: { duration: 1, delay: 1 },
      });
    };

    sequencia();
  }, [controls]);

  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full gap-8 lg:gap-16'>
      <div className='relative pb-14 w-full md:w-2/6 xl:w-3/12 select-none flex flex-col items-center gap-y-4'>
        <motion.img
          src={developerImage}
          alt='DeveloperImg'
          className='w-full border-2'
          initial={{
            opacity: 0,
            borderColor: '#00DA4C',
            borderRadius: 300,
          }}
          animate={controls}
        />

        <Contacts />
      </div>

      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-4/6 gap-y-4'>
        <h1 className='text-7xl font-bold w-full md:w-fit select-none text-center md:text-start'>
          Welcome
        </h1>

        <p className='text-lg w-full select-none text-center md:text-start'>
          Hi! I’m Matheus Eickhoff, a full-stack developer and Computer Science
          student at Unochapecó. I have experience with technologies like
          ReactJS, TypeScript, Node.js, Python, Docker, SQL, Git, and Figma.
          <br />
          I’m passionate about challenges that push my skills and help me grow.
          In this portfolio, I showcase projects that reflect my dedication and
          passion for software development.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
