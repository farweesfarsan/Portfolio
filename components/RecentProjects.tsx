// import { projects } from '@/data'
// import React from 'react'
// import { PinContainer } from './ui/PinContainer'
// import { FaLocationArrow } from "react-icons/fa";

// const RecentProjects = () => {
//   return (
//     <div className='py-20' id='projects'>
//         <h1 className='heading'>
//             A small selection of {' '}
//             <span className='text-purple'>Recent Projects</span>
//         </h1>
//         <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
//           {projects.map(({id,title,des,img,iconLists,link})=>(
//             <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]'>
                
//             <PinContainer title={title} href={link}>
//               <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[40vh] lg:h-[35vh] mb-10'>
//                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
//                     <img 
//                        src='/bg.png'
//                        alt='bg-img'
//                      />
//                  </div>
//                  <img
//                     src={img}
//                     alt={title}
//                     className="z-10 absolute top-2  bottom-0"
//                   />
//               </div>
//                 <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
//                     {title}
//                 </h1>
//                 <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
//                     {des}
//                 </p>
//                <div className='flex items-center justify-center mt-7 mb-3'>
//                   <div className='flex items-center'>
//                      {iconLists.map((icon,index)=>(
//                         <div 
//                          key={icon} 
//                          className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
//                          style={{
//                             transform: `translateX(-${5 * index + 2}px)`,
//                           }}
//                          >
//                             <img
//                                src={icon} alt={icon} className='p-1'
//                              />
//                         </div>
//                      ))}
//                   </div>

//                   <div className='flex justify-center items-center'>
//                      <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
//                         Check Live Site
//                      </p>
//                      <FaLocationArrow className='ms-3' color='#CBACF9'/>
//                   </div>
//                </div> 
//             </PinContainer>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default RecentProjects


// import { projects } from '@/data';
// import React from 'react';
// import { PinContainer } from './ui/PinContainer';
// import { FaLocationArrow } from "react-icons/fa";

// const RecentProjects = () => {
//   return (
//     <div className='py-20' id='projects'>
//       <h1 className='heading'>
//         A small selection of {' '}
//         <span className='text-purple'>Recent Projects</span>
//       </h1>
//       <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
//         {projects.map(({id, title, des, img, iconLists, link}) => (
//           <div 
//             key={id} 
//             className='sm:h-[35rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[480px] w-[70vw]'>
            
//             <PinContainer title={title} href={link}>
//               <div 
//                 className='relative flex items-center justify-center sm:w-[480px] w-[70vw] overflow-hidden sm:h-[30vh] h-[30vh] lg:h-[28vh] mb-10'>
//                 <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
//                   <img 
//                     src='/bg.png'
//                     alt='bg-img'
//                   />
//                 </div>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="z-10 absolute top-2 bottom-0"
//                   style={{ width: '80%', height: '80%', objectFit: 'contain' }} 
//                 />
//               </div>
//               <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
//                 {title}
//               </h1>
//               <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
//                 {des}
//               </p>
//               <div className='flex items-center justify-center mt-7 mb-3'>
//                 <div className='flex items-center'>
//                   {iconLists.map((icon, index) => (
//                     <div 
//                       key={icon} 
//                       className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img
//                         src={icon} alt={icon} className='p-1'
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className='flex justify-center items-center'>
//                   <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className='ms-3' color='#CBACF9'/>
//                 </div>
//               </div> 
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;


import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/PinContainer';
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='sm:h-[38rem] h-[32rem] lg:min-h-[36rem] flex items-center justify-center sm:w-[520px] w-[75vw]'>
            
            <PinContainer title={title} href={link}>
              <div
                className='relative flex items-center justify-center sm:w-[520px] w-[75vw] overflow-hidden sm:h-[34vh] h-[34vh] lg:h-[32vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img 
                    src='/bg.png'
                    alt='bg-img'
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute top-2 bottom-0"
                  style={{ width: '95%', height: '95%', objectFit: 'contain' }}
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-center mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div 
                      key={icon} 
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon} alt={icon} className='p-1'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#CBACF9'/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
