import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const footerItem = [
  {key: Date.now (), item: 'About Us', link: '/about'},
  {key: Date.now (), item: 'Contact Us', link: '/contact'},
  {key: Date.now (), item: 'FAQs', link: '/faqs'},
];

const Footer = () => {
  return (
    <footer className='w-full '>
      <div className="flex flex-col items-center justify-center text-white space-y-8 my-8">
        <img src="/images/logo.svg" />
        <div>
          <ul className="flex md:flex-row md:space-x-24 md:space-y-0 flex-col space-y-4 text-center">
            {footerItem.map (elm => {
              return (
                <li key={elm}>
                  <Link href={elm.link}>
                    <a>
                      {elm.item}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="space-x-12 flex flex-row items-center justify-center my-8">
            <Link href="#">
              <a>
                <FacebookIcon sx={{fontSize: '40px'}} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <LinkedInIcon sx={{fontSize: '40px'}} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <InstagramIcon sx={{fontSize: '40px'}} />
              </a>
            </Link>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
