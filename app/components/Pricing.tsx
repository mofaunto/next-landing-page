import Image from "next/image";
import Check from "../../public/assets/check.svg";
import CheckWhite from "../../public/assets/check - white.svg";

const checklistColor = {
  dark: "text-[#36485C]",
  light: "text-[#F4F8FA]",
};

const cardColors = {
  headerDark: "text-[#4328EB]",
  headerLight: "text-white",
  contentDark: "text-[#36485C]",
  contentLight: "text-[#F4F8FA]",
};

type ChecklistItemProps = {
  text: string;
  textColor?: keyof typeof checklistColor;
  imgSrc: string;
};

type PricingCardProps = {
  header: string;
  description: string;
  price: string;
  span?: string;
  headerColor?: keyof typeof cardColors;
  contentColor?: keyof typeof cardColors;
};

export function Pricing() {
  const PricingCard = ({
    header,
    description,
    price,
    span,
    headerColor = "headerDark",
    contentColor = "contentDark",
  }: PricingCardProps) => (
    <div>
      <h3
        className={`font-medium ${cardColors[headerColor]} text-[18px] lg:text-xl`}
      >
        {header}
      </h3>
      <p className={`pt-[12px] ${cardColors[contentColor]} lg:text-[18px]`}>
        {description}
      </p>
      <h2
        className={`pt-4 text-2xl ${cardColors[headerColor]} font-medium lg:text-[32px]`}
      >
        {price}
        <span className={`${cardColors[contentColor]}`}>{span}</span>
      </h2>
    </div>
  );

  const ChecklistItem = ({
    text,
    textColor = "dark",
    imgSrc,
  }: ChecklistItemProps) => (
    <li className={`flex items-center gap-x-2 ${checklistColor[textColor]}`}>
      <span>
        <Image
          src={imgSrc}
          alt='Checkmark'
          className='stroke-current text-blue-800'
        />
      </span>
      {text}
    </li>
  );
  return (
    <div className='py-[48px] lg:py-[60px]'>
      <h1 className='text-[#172026] text-center text-2xl font-medium lg:text-[42px]'>
        Flexible plans for you
      </h1>
      <p className='pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]'>
        No hidden fees!
      </p>

      <div className='flex flex-col gap-y-6 gap-x-[24px] lg:flex-row'>
        <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
          <div>
            <PricingCard
              header='Free Trial'
              description='Perfect for testing the waters'
              price='0$'
              span='/mo'
              headerColor='headerDark'
              contentColor='contentDark'
            />

            <ul className='flex flex-col gap-y-2 pt-4 lg:text-[18px]'>
              <ChecklistItem
                text='Lorem ipsum dolor sit amet'
                textColor='dark'
                imgSrc={Check}
              />
              <ChecklistItem
                text='Sed do eiusmod tempor incididunt'
                textColor='dark'
                imgSrc={Check}
              />
              <ChecklistItem
                text='Consectetur adipiscing elit'
                textColor='dark'
                imgSrc={Check}
              />
            </ul>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]'>
            Start Trial
          </button>
        </div>

        <div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col'>
          <div>
            <PricingCard
              header='Business'
              description='Perfect for small businesses'
              price='500$'
              span='/mo'
              headerColor='headerLight'
              contentColor='contentLight'
            />

            <ul className='flex flex-col gap-y-2 pt-4 lg:text-[18px]'>
              <ChecklistItem
                text='Lorem ipsum dolor sit amet'
                textColor='light'
                imgSrc={CheckWhite}
              />
              <ChecklistItem
                text='Sed do eiusmod tempor incididunt'
                textColor='light'
                imgSrc={CheckWhite}
              />
              <ChecklistItem
                text='Consectetur adipiscing elit'
                textColor='light'
                imgSrc={CheckWhite}
              />
              <ChecklistItem
                text='Lorem ipsum dolor sit amet'
                textColor='light'
                imgSrc={CheckWhite}
              />
              <ChecklistItem
                text='Consectetur adipiscing elit'
                textColor='light'
                imgSrc={CheckWhite}
              />
            </ul>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]'>
            Get Started
          </button>
        </div>

        <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
          <div>
            <PricingCard
              header='Enterprise'
              description='Perfect for big companies'
              price='Custom'
              headerColor='headerDark'
              contentColor='contentDark'
            />

            <p className='pt-4 text-[16px] text-[#36485C]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
            <p className='pt-2 text-[16px] text-[#36485C]'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
