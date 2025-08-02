import 'use client';

import { FAQ_SCHEMA } from '@/constants/landingpage';
import Icon from '@/components/ui/icons';
import { ICONS } from '@/constants/icons';
import { useState } from 'react';

const Faq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className='bg-blue-light-100'>
      <div className='grid mx-auto px-6 lg:w-3/5 pt-24 pb-11'>
        <div className='grid grid-flow-row gap-11'>
          <div>
            <p className='text-primary  lg:text-5xl text-lg font-Montserrat font-semibold '>
              Frequently Asked Questions
            </p>
          </div>
          <div className=' '>
            {FAQ_SCHEMA.map((schema) => {
              const { id, title } = schema;

              return (
                <div key={id} className='grid gap-4 pt-7 '>
                  <div className='grid grid-flow-col justify-between   '>
                    <p className='font-semibold max-w-xl lg:text-xl text-lg font-Montserrat text-[#020D06]'>
                      {title}
                    </p>
                    <span onClick={() => toggleFaq(id)}>
                      {showFaq === id ? (
                        <Icon type={ICONS.minus_icon} size={25} color='black' />
                      ) : (
                        <Icon type={ICONS.plus_icon} size={25} color='black' />
                      )}
                    </span>
                  </div>
                  {showFaq === id && (
                    <p className='text-[#767676] text-lg font-normal max-w-3xl'>
                      Yes, we prioritize the security and privacy of your
                      information. We use advanced encryption technology to
                      protect your personal data.
                    </p>
                  )}

                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
