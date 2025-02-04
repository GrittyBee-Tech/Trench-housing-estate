import Image from 'next/image';
import Button from '@/components/ui/Button';

const News = () => {
  return (
    <div id='blog' className='px-6 sm:px-12 xl:px-24 my-14'>
      <h3 className='text-[#001a35] text-5xl pt-9 font-bold font-Montserrat mb-8'>
        News and Trends
      </h3>
      <section className='grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-5'>
        <article className='p-4 sm:py-8 sm:px-5 bg-[#F5F5F5] flex flex-col gap-4 lg:gap-0 justify-between rounded-ss-2xl rounded-ee-2xl row-span-3 h-full'>
          <Image src='/public/news1.png' className='w-full lg:h-72' alt='' />
          <h5 className='text-2xl font-semibold text-black font-Montserrat xl:text-nowrap'>
            Latest news about Milestone Hotel
          </h5>
          <p className='text-black pb-6'>
            Lorem ipsum dolor sit amet consectetur. Aliquet adipiscing non
            elementum venenatis. Sed aliquet porttitor. Cras sit sit in quis ac
            eget. Aliquam enim vivamus aliquam viverra.
          </p>
          <div className='flex justify-between w-full'>
            <p className='text-[#606060] text-xl'>30 reads</p>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              className='bg-[#001f3f] px-4 py-2 text-white rounded-lg'
            >
              Learn More
            </Button>
          </div>
        </article>
        <article className='flex sm:flex-row flex-col lg:h-52 overflow-hidden xl:h-[11rem] items-center rounded-2xl bg-[#f5f5f5]'>
          <Image
            className='w-full mb-2 sm:w-2/5 lg:w-52 h-full rounded-3xl'
            src='/assets/news2.png'
            alt=''
          />
          <div className='lg:py-3 lg:px-5 p-5 rounded-e-lg h-full overflow-hidden'>
            <h5 className='text-xl font-semibold font-Montserrat text-[#000000] mb-2 hidden lg:block'>
              {'3 bedroom apartment under construction'
                .substring(0, 22)
                .concat('...')}
            </h5>
            <h5 className='text-2xl font-semibold font-Montserrat text-[#000000] mb-2 block lg:hidden'>
              {'3 bedroom apartment under construction'}
            </h5>
            <p className='lg:text-sm font-Montserrat text-[#000000]'>
              Lorem ipsum dolor sit amet consectetur. Aliquet adipiscing non
              elementum venenatis. Sed aliquet porttitor. Cras sit sit
            </p>
          </div>
        </article>
        <article className='flex sm:flex-row flex-col lg:h-52 overflow-hidden xl:h-[11rem] items-center rounded-2xl bg-[#f5f5f5]'>
          <Image
            className='w-full mb-2 sm:w-2/5 lg:w-52 h-full rounded-3xl'
            src='/assets/news1.png'
            alt=''
          />
          <div className='lg:py-3 lg:px-5 p-5 rounded-e-lg h-full overflow-hidden'>
            <h5 className='text-xl font-semibold font-Montserrat text-[#000000] mb-2 hidden lg:block'>
              {'Latest news about Milestone Hotel'
                .substring(0, 22)
                .concat('...')}
            </h5>
            <h5 className='text-2xl font-semibold font-Montserrat text-[#000000] mb-2 block lg:hidden'>
              {'Latest news about Milestone Hotel'}
            </h5>
            <p className='lg:text-sm font-Montserrat text-[#000000]'>
              Lorem ipsum dolor sit amet consectetur. Aliquet adipiscing non
              elementum venenatis. Sed aliquet porttitor. Cras sit sit
            </p>
          </div>
        </article>
        <article className='flex sm:flex-row flex-col lg:h-52 overflow-hidden xl:h-[11rem] items-center rounded-2xl bg-[#f5f5f5]'>
          <img
            className='w-full mb-2 sm:w-2/5 lg:w-52 h-full rounded-3xl'
            src='/assets/news3.png'
            alt=''
          />
          <div className='lg:py-3 lg:px-5 p-5 rounded-e-lg h-full overflow-hidden'>
            <h5 className='text-xl font-semibold font-Montserrat text-[#000000] mb-2 hidden lg:block'>
              {'What you need to know about owning a house'
                .substring(0, 22)
                .concat('...')}
            </h5>
            <h5 className='text-2xl font-semibold font-Montserrat text-[#000000] mb-2 block lg:hidden'>
              {'What you need to know about owning a house'}
            </h5>
            <p className='lg:text-sm font-Montserrat text-[#000000]'>
              Lorem ipsum dolor sit amet consectetur. Aliquet adipiscing non
              elementum venenatis. Sed aliquet porttitor. Cras sit sit
            </p>
          </div>
        </article>
        {/* </div> */}
      </section>
    </div>
  );
};

export default News;
