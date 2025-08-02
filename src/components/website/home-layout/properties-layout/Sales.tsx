import Button from '@/components/ui/Button';
import Image from 'next/image';

import Icon from '@/components/ui/icons';
import { ICONS } from '@/constants/icons';
import { assets, assets2 } from '@/constants/landingpage';

const Sales = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-4 lg:px-0 md:mt-7 md:justify-between'>
        {[...assets, ...assets2].map((asset) => {
          const { id, image } = asset;
          return (
            <div key={id} className=' rounded-lg shadow-md'>
              <div className='p-2'>
                <Image
                  className='w-full h-52'
                  src={'/assets/house.png'}
                  alt=''
                />
              </div>
              <div>
                <p className='p-2 font-semibold text-[#262626] lg:text-base text-sm font-Montserrat'>
                  SEMI-DETATCHED APARTMENT
                </p>
                <div className='p-2 grid grid-flow-col gap-1'>
                  <span className='text-sm md:pt-1'>
                    <Icon
                      type={ICONS.location_icon}
                      size={20}
                      color='#090909'
                    />
                  </span>
                  <p className='font-Montserrat text-[#606060] lg:text-base text-sm'>
                    23, Micheal Cole Street, Lekki Phase 1, Lagos State
                  </p>
                </div>
                <div className='grid grid-flow-col w-max gap-4 p-2 '>
                  <div className='grid grid-flow-col w-max gap-1'>
                    <span>
                      <Icon type={ICONS.bed_icon} size={20} color='#090909' />
                    </span>
                    <p className='text-[#404040]'>Bed</p>
                  </div>
                  <div className='grid grid-flow-col w-max gap-1'>
                    <span>
                      <Icon
                        type={ICONS.toilet_icon}
                        size={20}
                        color='#090909'
                      />
                    </span>
                    <p className='text-[#404040]'>Toilet</p>
                  </div>
                </div>
                <div className='flex p-2 justify-between'>
                  <div className='grid grid-flow-col w-max gap-1'>
                    <span className='text-[#000000] text-2xl md:mt-[0.30rem] pt-1'>
                      <Icon
                        type={ICONS.naira_currency}
                        size={20}
                        color='#090909'
                      />
                    </span>
                    <p className='font-medium font-Montserrat text-2xl'>
                      15,000,000
                    </p>
                  </div>
                  <Button
                    type='button'
                    size='sm'
                    variant='secondary'
                    className='bg-[#001F3F] text-[1rem] font-Montserrat px-5 py-2 rounded-md text-white'
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="grid md:grid-flow-col grid-flow-row justify-center gap-2  md:p-0 p-4  md:mt-7 md:justify-between">
        {assets2.map((asset) => {
          const { id, image } = asset;
          return (
            <div key={id} className="md:max-w-md w-full rounded-lg shadow-md">
              <div className="p-2">
                <img className="w-full" src={image} alt="" />
              </div>
              <div>
                <p className="p-2 font-semibold text-sm lg:text-base text-[#262626] font-Montserrat">
                  SEMI-DETATCHED APARTMENT
                </p>
                <div className="p-2 grid grid-flow-col w-max gap-1 items-center">
                  <span className="text-sm">
                    <Icon
                      type={ICONS.location_icon}
                      size={20}
                      color="#090909"
                    />
                  </span>
                  <p className="font-Montserrat text-[#606060] text-sm lg:text-base">
                    23, Micheal Cole Street, Lekki Phase 1, Lagos State
                  </p>
                </div>
                <div className="grid grid-flow-col p-2 justify-between">
                  <div className="grid grid-flow-col w-max">
                    <span className="text-[#000000] text-2xl md:mt-[0.30rem] pt-1">
                      <Icon
                        type={ICONS.naira_currency}
                        size={20}
                        color="#090909"
                      />
                    </span>
                    <p className="font-medium font-Montserrat text-2xl">
                      15,000,000
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="bg-[#001F3F] font-normal text-[1rem] font-Montserrat px-5 py-2 rounded-md text-white"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Sales;
