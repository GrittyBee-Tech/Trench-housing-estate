import logo from '../../assets/brands/logo-white.png';
import Icon from '../../assets/icons';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-[#001A35] text-white px-8 sm:px-12 py-8 xl:p-24 flex gap-8 lg:flex-row flex-col items-start justify-between">
      <img src={logo} alt="" className="w-40 xl:w-auto" />
      <ul className="flex flex-col gap-4">
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <HashLink to={'#blog'}>Blog</HashLink>
        </li>
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <a href="/about">About Us</a>
        </li>
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <a href="/">Contact Us</a>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <a href="/">Terms and Conditions</a>
        </li>
        <li className="font-medium font-Montserrat lg:text-base text-lg">
          <a href="/">Frequently asked Questions</a>
        </li>
      </ul>

      <ul className="flex flex-col gap-3">
        <li className="flex gap-3 items-start">
          <Icon size={24} color="white" type="location_icon" />
          <p className="font-Montserrat lg:text-base text-lg">
            Lorem ipsum dolor sit
            <br /> amet, consectetur
          </p>
        </li>
        <li className="flex gap-3 items-start">
          <Icon size={24} color="white" type="mail_icon" />
          <p className="font-Montserrat lg:text-base text-lg">
            debra.holt@example.com
          </p>
        </li>
        <li className="flex gap-3 items-start">
          <Icon size={24} color="white" type="location_icon" />
          <p className="font-Montserrat lg:text-base text-lg">(239) 555-0108</p>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="flex gap-2 items-start">
          <Icon size={24} color="white" type="fb_icon" />
          <p>@Trenchhousing</p>
        </li>
        <li className="flex gap-2 items-start">
          <Icon size={24} color="white" type="ig_icon" />
          <p>@Trenchhousing</p>
        </li>
        <li className="flex gap-2 items-start">
          <Icon size={24} color="white" type="twitter_icon" />
          <p>@Trenchhousing</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
