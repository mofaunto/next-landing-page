import Image from "next/image";

//Assets for the Hero Section
import BlueArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImg from "../../public/assets/Image.svg";

//Logos for Companies
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import CNN from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className='pt-4 lg:pt-10'>
      <div className='px-[20px] lg:px-[280px]'>
        <h1 className='text-center text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[64px] lg:leading-[72px]'>
          Start monitoring your website like a pro
        </h1>
        <p className='text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7'>
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className='flex w-full py-8 justify-center gap-x-6'>
          <button className='bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit'>
            Try for Free
          </button>
          <button className='flex items-center justify-center gap-x-2 w-1/2 text-[#4328EB] font-medium lg:w-fit'>
            View Pricing
            <span>
              <Image src={BlueArrow} alt='Arrow Icon' />
            </span>
          </button>
        </div>
      </div>

      <div className='relative flex h-full w-full justify-center'>
        <Image
          src={Gradient}
          alt='Gradient Background'
          className='min-h-[500px] w-full object-cover lg:h-auto'
        />
        <div className='absolute bottom-5 flex w-full flex-col items-center'>
          <Image
            src={HeroImg}
            alt='Heroshot'
            className='-ml-4 h-[320px] sm:h-[400px] sm:-mb-20 lg:-mb-28 lg:h-auto xl:w-[70%]'
          />

          <div className='flex flex-col w-full mt-4 items-center lg:container lg:flex-row lg:justify-between lg:px-20 lg:mt-0'>
            <p className='text-white text-center lg:text-[18px]'>
              Trusted by these companies:
            </p>
            <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
              <Image src={Google} alt='Google Logo' />
              <Image src={Slack} alt='Slack Logo' />
              <Image src={Trustpilot} alt='Trustpilot Logo' />
              <Image src={CNN} alt='CNN Logo' />
              <Image src={Clutch} alt='Clutch Logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
