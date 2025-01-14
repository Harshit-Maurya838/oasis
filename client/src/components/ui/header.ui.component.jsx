import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from '../icons/cart.icon.component';

function Header({ brandImg, nav = [] }) {
  return (
    <header>
      <div className='Branding' >
        <Image
          src={brandImg}
          alt='Brand Logo'
          width={84}
          height={30}
        />
      </div>
      <nav>
        <ul>
          {
            nav.map((item) => {
              for (const key in item) {
                return (
                  <Link key={key} href={item[key]} title={key}>{key}</Link>
                )
              }
            })
          }
        </ul>
      </nav>
      <div>
        <div>
          <CartIcon width={24}  />
        </div>
        <div>
          <h1 className=" text-xl" >Get Started</h1>
        </div>
      </div>
    </header>
  )
}

export default Header