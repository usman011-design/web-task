import React, {useState, useEffect} from 'react';
import scrollToTarget from './scrollToTarget';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled sticky' : ''}>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTarget('#hero'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToTarget('#about'); }}>About</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToTarget('#contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
