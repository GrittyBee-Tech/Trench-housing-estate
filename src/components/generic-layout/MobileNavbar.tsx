// 'use client';

// // import Button from '../ui/Button';
// import { useSelector, useDispatch } from 'react-redux';
// // import { navActions } from '../../store/nav-slice';
// // import { RootState } from '../../store/store';
// import logo from '../../assets/brands/logo.png';
// // import { useNavigate } from 'react-router-dom';
// // import Icon from '../../assets/icons';
// import { ICONS } from '../../constants/icons';

// const MobileNavbar = () => {
//   // const isOpen = useSelector((state: RootState) => state.nav.isOpen);
//   // const activeTab = useSelector((state: RootState) => state.nav.activeTab);
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();

//   // const toggleContent = () => {
//   //   dispatch(navActions.toggle());
//   // };
//   const isActive = (itemId: string) => {
//     dispatch(navActions.navToggle(itemId));
//   };

//   return (
//     <section className='  z-50 flex fixed top-0  bg-white w-full h-full  '>
//       <nav className='w-full '>
//         <div className='shadow-2xl p-2 '>
//           <div className='px-6 grid grid-flow-col justify-between'>
//             <span>
//               <img src={logo} alt='' />
//             </span>
//             <span>
//               <Icon type={ICONS.mail_icon} size={24} color='#090909' />
//             </span>
//           </div>
//         </div>
//         <div className='py-2 grid grid-flow-row gap-5'>
//           <div className='grid grid-flow-row justify-items-center   '>
//             <div
//               onClick={() => isActive('home')}
//               className={`${
//                 activeTab === 'home'
//                   ? 'font-bold text-primary px-28 py-2 text-xl font-Montserrat border-b  border-b-primary cursor-pointer '
//                   : 'font-normal text-primary px-28 py-2 text-xl font-Montserrat cursor-pointer'
//               }`}
//             >
//               Home
//             </div>
//             <div
//               onClick={() => isActive('properties')}
//               className={`${
//                 activeTab === 'properties'
//                   ? 'font-bold text-primary px-28 py-2 font-Montserrat '
//                   : 'font-normal text-primary px-28 py-2 font-Montserrat'
//               }`}
//             >
//               <button
//                 className={`font-normal lg:text-base text-primary xl:text-lg font-Montserrat ${
//                   isOpen && 'font-bold text-xl  text-primary lg:text-base '
//                 }`}
//               >
//                 {' '}
//                 Properties
//               </button>
//             </div>
//             <div
//               onClick={() => isActive('contact')}
//               className={`${
//                 activeTab === 'contact'
//                   ? 'font-bold text-primary px-28 py-2 text-xl xl:text-lg lg:text-[1rem]   font-Montserrat cursor-pointer border-b  border-b-primary'
//                   : 'font-normal text-primary px-28 py-2 xl:text-lg lg:text-[1rem] text-lg font-Montserrat cursor-pointer'
//               }`}
//             >
//               Contact Us
//             </div>
//             <div
//               onClick={() => isActive('blog')}
//               className={`${
//                 activeTab === 'blog'
//                   ? 'font-semibold text-primary px-28 py-2 text-xl xl:text-lg  font-Montserrat cursor-pointer border-b  border-b-primary'
//                   : 'font-normal text-primary px-28 py-2 text-lg xl:text-lg lg:text-[1rem] font-Montserrat cursor-pointer'
//               }`}
//             >
//               Blog
//             </div>
//             <div
//               onClick={() => isActive('agent')}
//               className={`${
//                 activeTab === 'agent'
//                   ? 'font-semibold text-primary px-20 py-2 text-xl font-Montserrat cursor-pointer border-b  border-b-primary'
//                   : 'font-normal text-primary px-20 py-2 text-xl font-Montserrat cursor-pointer'
//               }`}
//             >
//               Become an Agent
//             </div>
//           </div>
//         </div>
//         <div className='grid grid-flow-row px-8 py-3 gap-4'>
//           <button
//             // onClick={() => navigate('/login')}
//             className=' border py-3 border-blue-light-900 bg-white rounded-md hover:bg-[purple] hover:text-white shadow-md font-bold  font-Montserrat'
//           >
//             Sign in
//           </button>
//           <button
//             // onClick={() => navigate('/register')}
//             className=' rounded-md hover:bg-[purple] py-3 hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-[1rem] font-Montserrat'
//           >
//             Get started
//           </button>
//         </div>
//       </nav>
//       {/* {isOpen && (
//         <div className="bg-white p-2 transition-opacity shadow-lg flex flex-col gap-2 rounded-md md:w-[9.2rem] absolute top-[5.1rem] xl:left-[24rem] lg:left-[29.4rem]">
//           <Button
//             type="button"
//             size="sm"
//             variant="secondary"
//             className="hover:text-white py-2 px-3 flex flex-start  lg:text-[1rem] font-Montserrat  hover:bg-[#001F3F] rounded-md"
//           >
//             Buy
//           </Button>
//           <Button
//             type="button"
//             size="sm"
//             variant="secondary"
//             className="hover:text-white py-2 px-2 flex flex-start lg:text-[1rem] font-Montserrat hover:bg-[#001F3F] rounded-md"
//           >
//             Rent
//           </Button>
//           <Button
//             type="button"
//             size="sm"
//             variant="secondary"
//             className="hover:text-white py-2 px-2 flex flex-start  md:text-[1rem] font-Montserrat hover:bg-[#001F3F] rounded-md"
//           >
//             Lease
//           </Button>
//         </div>
//       )} */}
//     </section>
//   );
// };

// export default MobileNavbar;
