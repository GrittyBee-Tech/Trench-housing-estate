import Button from '@/components/ui/Button';

const Subscribe = () => {
  return (
    <div className='my-10 md:my-16 text-center px-6 sm:px-12 xl:px-24'>
      <h2 className='lg:text-5xl text-4xl font-semibold font-Montserrat'>
        Subscribe to get our Newsletter
      </h2>
      <p className='mt-6 text-lg sm:text-xl font-Montserrat text-[#515151] mb-10 md:mb-16'>
        Opening a newsletter is like unwrapping a gift: you never know what
        wisdom and inspiration you{"'"}ll find inside
      </p>
      <div className='w-full border border-[#000000] px-3 md:px-4 py-2 rounded-full flex justify-between items-center'>
        <input
          type='email'
          placeholder='Enter your email address'
          className='border-none w-4/5 outline-none sm:text-lg xs:text-xl md:text-2xl pl-1 sm:pl-4 font-Montserrat'
        />
        <Button
          type='button'
          size='sm'
          variant='secondary'
          className='text-white bg-[#001f3f] py-2 px-4 sm:px-6 md:px-8 md:py-3.5 rounded-full sm:text-lg xs:text-xl md:text-2xl font-Montserrat'
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
