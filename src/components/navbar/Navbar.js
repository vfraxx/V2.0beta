import React , { useState } from 'react';
import './navbar.css';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = ()=> {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  // const handleClose =()=> setNav(!nav)

  


  return (
    <>
      <header className='hed'>
        <ul className='list'>
            <Link className='tn' to="/" ><li><h1 className='mono hover'>ア</h1></li></Link>
            <Link className='tn' to="/soon"><li className='item link'>Projects</li></Link>
            <Link className='tn' to="/soon"><li className='item link ext'>Designs</li></Link>
            <Link className='tn' to='/contact'><li className='item ext link'>Contact</li></Link>
        </ul>
        <ui className='icons'>
          <a href='https://github.com/Afra-san/'><FaGithub className='git' /></a>
          <a href='https://instagram.com/afrahimself'><FaInstagram className='insta' /></a>
          <a href='https://twitter.com/afrainjast'><FaTwitter className='twit' /></a>
        </ui>

      </header>
            {!nav ? <BiMenuAltLeft className='navicon' /> : <AiOutlineCloseCircle className='navicon' />}
          
      <nav className='hidden nav' onClick={handleClick}>
          <ul className={nav ? 'hidden nav-list' : 'red'}>
          <Link className='nav-item mono hover' to="/" ><li><h1>ア</h1></li></Link>
           <Link className='nav-item' to="/soon" ><li>Projects</li></Link>
           <Link className='nav-item' to="/soon" ><li>Designs</li></Link>
           <Link className='nav-item' to="/contact" ><li>Contact</li></Link>
          </ul>
      </nav>


        {/* <BiMenuAltLeft className='navicon'
                         onClick={handleClick}
          /> */}
    </>
  )
}

export default Navbar;