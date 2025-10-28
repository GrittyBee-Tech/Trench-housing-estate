'use client';

const TrenchHero = () => {
  return (
    <section className='bg-heroBg bg-no-repeat  bg-cover w-full md:py-40 pb-5 '>
      <div className='container '>
        <div className=' grid gap-5'>
          <div className='grid gap-3'>
            <h1 className=' md:pt-3 pt-20 text-[#FFFFFF] font-bold text-2xl font-Montserrat md:text-6xl'>
              Every Home Has a Story.
            </h1>
            <p className=' font-Montserrat md:max-w-4xl font-normal text-sm md:text-xl text-[#FFFFFF] '>
              Trench Housing is Nigeria’s smart property platform that lets you
              connect directly with landlords, certified property lawyers, or
              trusted agents — no inflated fees, no middlemen headaches.
            </p>
          </div>
          <div className='grid grid-flow-col w-max gap-4 '>
            <button
              // onClick={''}
              className='  lg:px-11 px-4 rounded-lg hover:bg-[purple] hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-base font-Montserrat'
            >
              Learn More
            </button>
            <button
              // onClick=''
              className=' border  border-white px-8 py-3 lg:px-8 lg:py-3 rounded-lg hover:border-[purple] hover:bg-[purple] hover:text-white  text-white shadow-md  font-bold lg:text-base font-Montserrat'
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrenchHero;
