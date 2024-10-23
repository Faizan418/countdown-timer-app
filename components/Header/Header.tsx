'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

  function toggleMenu() {
    const stul = document.querySelector('ul');
      stul?.classList.toggle('active');

    }

  return (
    <div className='main-header-page'>
      <nav className='main-header-nav'>
        <div className='nav-logo'>
          <Image className='logo' src="/images/perfect-logo.png" width={120} height={120} alt='Logo'/>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
      </div>

        <div>
        <ul>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>About</Link></li>
          <li><Link href={"/"}>Portfolio</Link></li>
        </ul>
        </div>
      </nav> 
    </div>
  )
}


