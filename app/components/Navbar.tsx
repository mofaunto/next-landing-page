import Image from "next/image";

//Assets for the Navbar
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
      <div className='flex items-center'>
        <Image src={Logo} alt='Logo' />

        <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
          {navLinks.map((item, index) => (
            <p className='text-[#36485C] font-medium' key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className='flex gap-x-4 items-center justify-center'>
        <p className='hidden lg:block font-medium text-[#36485c] pr-[56px]'>
          Open an Account
        </p>

        <div className='flex items-center gap-x-4'>
          <Image src={User} alt='User icon' />
          <span className='hidden font-medium text-[#36485c] lg:block'>
            Sign In
          </span>
        </div>
        <div className='lg:hidden'>
          <Image src={Menu} alt='Menu icon' />
        </div>
      </div>
    </nav>
  );
}
