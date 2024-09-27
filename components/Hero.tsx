
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextProvider'
import NearMeIcon from '@mui/icons-material/NearMe';

const Hero = () => {
  return (
    <>
    <div className='pb-30 pt-36'>
       <Spotlight className='-top-40 -left-20 md:-top-32 md:-left-20 h-screen' fill='white'/>
       <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
       <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
    </div>

<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center top-0 left-0 absolute">
{/* Radial gradient for the container to give a faded look */}
<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/></div>


<div className='flex justify-center relative my-20 z-10'>
   <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
     <h2 className='tracking-widest text-md text-center text-blue-100  max-w-80'>
     FullStack Developer
     </h2>
     <TextGenerateEffect
   className='text-center text-[40px] md:text-5xl lg:text-6xl'
   words='Farwees Farsan  '
     />
     <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
     Hi! I'm creative  Developer Based in Sri Lanka, and I'm Very passionate and dedicated to my work
     </p>
      <a>
        <MagicButton
          title = 'Start my work'
          icon={<NearMeIcon/>}
          position='right'
        />
      </a>
   </div>
</div>


</>
  )
}

export default Hero