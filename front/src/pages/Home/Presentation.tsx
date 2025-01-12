// Local
import developerImage from 'assets/developer.webp';

const Presentation = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mt-10 w-5/6 xl:w-4/6 2xl:w-3/6 gap-8 lg:gap-16'>
      <img
        src={developerImage}
        className='w-full md:w-2/6 rounded-box border-2 border-primary'
      />

      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-4/6 gap-y-4'>
        <h1 className='text-7xl font-bold w-full md:w-fit'>Welcome</h1>

        <p className='text-lg w-full'>
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
