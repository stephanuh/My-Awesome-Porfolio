import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import '../Navbar.css';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/images/My-Logo.png" alt="Your Name Logo" />
        </a>
        <div className="navbar-actions">
          <ThemeToggle />
          
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeLink === 'skills' ? 'active' : ''}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;