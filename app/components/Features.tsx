import Image from "next/image";

//Image Assets for features
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import BlueArrow from "../../public/assets/blue-button.svg";
import GreenArrow from "../../public/assets/green-button.svg";
import PinkArrow from "../../public/assets/pink-button.svg";

const colorVariables = {
  blue: "text-[#0085FF]",
  green: "text-[#00A424]",
  pink: "text-[#EB2891]",
};

type ChecklistItemProps = {
  text: string;
};

type FeatureProps = {
  subheader: string;
  header: string;
  imageSrc: string;
  altText: string;
  description: string;
  subheaderColor?: keyof typeof colorVariables;
};

export function Features() {
  const FeatureElements = ({
    subheader,
    header,
    imageSrc,
    altText,
    description,
    subheaderColor = "blue",
  }: FeatureProps) => (
    <div>
      <h3
        className={`font-medium ${colorVariables[subheaderColor]} lg:text-[18px]`}
      >
        {subheader}
      </h3>
      <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>
        {header}
      </h1>
      <Image src={imageSrc} alt={altText} className='pt-[24px] sm:hidden' />
      <p className='text-[#36486C] py-[24px] lg:text-[18px]'>{description}</p>
    </div>
  );

  const ChecklistItem = ({ text }: ChecklistItemProps) => (
    <li className='flex items-center gap-x-2 text-[#36486C]'>
      <span>
        <Image src={Check} alt='Checkmark' />
      </span>
      {text}
    </li>
  );

  const FeatureList = () => (
    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
      <ChecklistItem text='Lorem ipsum dolor sit amet' />
      <ChecklistItem text='Consectetur adipiscing elit' />
      <ChecklistItem text='Sed do eiusmod tempor incididunt ut labore' />
    </ul>
  );

  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] '>
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={Feature1}
          alt='Feature 1 Image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <FeatureElements
            subheader='Sales Monitoring'
            header='Simplify your sales monitoring'
            imageSrc={Feature1}
            altText='Image for Feature 1'
            description="Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard."
            subheaderColor='blue'
          />
          <FeatureList />
          <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
            Learn More
            <span>
              <Image src={BlueArrow} alt='Arrow' />
            </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row'>
        <Image
          src={Feature2}
          alt='Feature 2 Image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
          <FeatureElements
            subheader='Customer Support'
            header='Get in touch with your customers'
            imageSrc={Feature2}
            altText='Image for Feature 2'
            description="Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard."
            subheaderColor='green'
          />
          <FeatureList />
          <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]'>
            Learn More
            <span>
              <Image src={GreenArrow} alt='Arrow' />
            </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={Feature3}
          alt='Feature 3 Image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <FeatureElements
            subheader='Growth Monitoring'
            header='Monitor your site’s new subscribers'
            imageSrc={Feature3}
            altText='Image for Feature 3'
            description="Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. "
            subheaderColor='pink'
          />

          <div className='flex w-full gap-x-[24px]'>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
              <p className='text-[#36485C]'>Lorem ipsum dolor sit</p>
            </div>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
              <p className='text-[#36485C]'>Conse adipiscing elit</p>
            </div>
          </div>

          <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]'>
            Learn More
            <span>
              <Image src={PinkArrow} alt='Arrow' />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
