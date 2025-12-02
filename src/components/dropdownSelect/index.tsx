'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { IconType } from 'react-icons';

interface DropdownSelectProps {
  label: string;
  icon: IconType;
  options: string[];
  defaultValue?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  icon: Icon,
  options,
  defaultValue,
  fullWidth = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className='grid grid-flow-row gap-2'>
      {/* Label Section */}
      <div className='grid grid-flow-col w-max gap-2 items-center'>
        <span className='md:block hidden '>
          <Icon size={20} color='#404040' />
        </span>
        <span className='lg:hidden block'>
          <Icon size={14} color='#404040' />
        </span>
        <p className='text-secondary font-Montserrat text-sm md:text-xl'>
          {label}
        </p>
      </div>

      {/* Dropdown Section */}
      <div className='relative'>
        <button
          onClick={toggleDropdown}
          className={`grid grid-flow-col w-max gap-7 justify-between items-center ${
            fullWidth ? 'w-full' : 'w-max gap-11'
          } bg-[#F2F2F2] py-2 sm:py-3 px-3 rounded-md`}
        >
          <p className='text-secondary text-xl font-Montserrat font-medium'>
            {selected}
          </p>
          {isOpen ? (
            <ChevronUp size={18} color='#090909' />
          ) : (
            <ChevronDown size={12} color='#090909' />
          )}
        </button>

        {isOpen && (
          <div className='bg-gray-25 z-50 absolute w-full mt-1 border border-gray-300 rounded-lg h-40 dropdown-scroll-bar overflow-y-auto'>
            {options.map((option, index) => (
              <p
                key={index}
                onClick={() => handleSelect(option)}
                className='py-1 hover:bg-[#F2F2F2] px-3 cursor-pointer'
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;
