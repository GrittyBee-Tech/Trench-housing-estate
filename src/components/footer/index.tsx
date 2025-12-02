'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { footerSectionSchema } from '@/app/utils/constants';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-[#FAFAFA] text-[#000000] font-inter'>
      {/* Footer Columns */}
      <div className='py-12 md:container px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-56'>
          {footerSectionSchema.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h6 className='font-semibold text-lg text-[#001A35]'>
                {section.title}
              </h6>
              <ul className='space-y-2 mt-6'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="relative inline-block  transition-colors duration-200 hover:text-[#890D8B] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#890D8B] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-[#E6E6E6]' />
      {/* Footer Bottom */}
      <div className=' container flex flex-col md:flex-row justify-between items-center py-6  gap-4'>
        <div className='flex items-center gap-2'>
          <Image src='/logo.svg' width='150' height='150' alt='logo' />
        </div>
        <p className='md:text-sm text-xs grid md:grid-flow-col text-center items-center md:text-left text-[#555]'>
          © {new Date().getFullYear()} Trench-Housing. All rights reserved. |{' '}
          <Link href='/' className='hover:text-[#890D8B]'>
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href='/' className='hover:text-[#890D8B]'>
            Terms & Conditions
          </Link>
        </p>

        <div className='flex items-center gap-5 text-[#001A35] text-xl'>
          <Link
            href='https://x.com/onecart_me?s=21'
            target='_blank'
            aria-label='Twitter'
          >
            <Twitter className='hover:scale-110 transition-transform duration-200' />
          </Link>
          <Link
            href='https://www.linkedin.com/company/onecartuk/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <Linkedin className='hover:scale-110 transition-transform duration-200' />
          </Link>
          <Link
            href='https://www.facebook.com/share/16HCaFFKy9/?mibextid=wwXIfr'
            target='_blank'
            aria-label='Facebook'
          >
            <Facebook className='hover:scale-110 transition-transform duration-200' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
