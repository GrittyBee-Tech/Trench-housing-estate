import { ReactNode } from "react";
import bg from "../../assets/images/auth-bg.png";
import PropTypes from 'prop-types';
import logo from "../../assets/brands/logo.svg";
import { NavLink } from "react-router-dom";

interface propTypes {
  children: ReactNode
}

const AuthLayout = ({children}: propTypes) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch min-h-screen relative">
      <div className="w-full md:w-7/12 overflow-clip">
        <img src={bg} alt="" className="-mt-2 -z-10 h-[37rem] lg:h-[1124px] w-full" />
      </div>
      {/* <div className="w-full md:w-5/12 h-72 md:h-fit" /> */}


      {/* <div className="absolute top-1/4 -translate-y-1/2 right-1/2 md:translate-x-0 -translate-x-1/2 md:right-[12%] w-4/5 lg:w-1/2 p-8 sm:p-12 bg-white rounded-lg flex flex-col" style={{boxShadow: "1px 5px 14px 0px #0000001A" }}> */}
      <div className=" lg:right-[12%] sm:right-[10%] w-4/5 lg:w-1/2  p-8 sm:p-12 absolute bg-white rounded-lg flex flex-col" style={{boxShadow: "1px 5px 14px 0px #0000001A", top:"100px" }}>
        <img src={logo} alt="logo" className="mx-auto mb-8" />
        <header className="w-full text-black">
          <h2 className="text-2xl font-semibold font-Montserrat mb-3">Register to Trenchousing</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sagittis ullaper ante metus amet nec donec sit. Orci.</p>
          <nav className="flex w-full gap-9 mt-4 mb-6 border-b border-b-secondary">
            <NavLink
              to='/register'
              className={({isActive}) => `text-xl font-Montserrat pb-1 ${isActive ? "text-primary font-semibold border-b-primary border-b-2" : 'text-black'}`}
            >
              Register
            </NavLink>
            <NavLink
              to='/login'
              className={({isActive}) => `text-xl font-Montserrat pb-1 ${isActive ? "text-primary font-semibold border-b-primary border-b-2" : 'text-black'}`}
            >
              Login
            </NavLink>
          </nav>
        </header>

        {children}
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout