import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full'>
      <div className='bg-hero-pattern bg-no-repeat lg:bg-cover md:bg-cover xl:bg-cover bg-cover w-full lg:pb-48 pb-5 '>
        <div className=' grid gap-11 px-7 xl:px-28'>
          <div className='grid gap-3'>
            <h1 className=' md:pt-60 pt-20 text-[#FFFFFF] font-bold text-2xl font-Montserrat md:text-8xl'>
              The story of a Home.
            </h1>
            <p className=' font-Montserrat lg:max-w-4xl font-normal text-sm md:text-xl text-[#FFFFFF] '>
              In the heart of every neighborhood lies a story waiting to be
              written. Whether it’s a bustling commercial space or a cozy
              suburban house. We’ve got you covered!{' '}
            </p>
          </div>

          <div className='grid grid-flow-col w-max gap-4 '>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              onClick={() => navigate('/about')}
              className='  lg:px-11 px-4 rounded-lg hover:bg-[purple] hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-base font-Montserrat'
            >
              Learn More
            </Button>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              onClick={() => navigate('/contact')}
              className=' border border-white px-8 py-3 lg:px-8 lg:py-3 rounded-lg hover:border-[purple] hover:bg-[purple] hover:text-white  text-white shadow-md  font-bold lg:text-base font-Montserrat'
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
