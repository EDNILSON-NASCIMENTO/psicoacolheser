'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const toggleDropdown = (e: React.MouseEvent, dropdownId: string) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleLinkClick = () => {
    if (isMobileNavActive) {
      setIsMobileNavActive(false); // Fecha a nav mobile ao clicar em um link
    }
  };

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <a href="tel:+55119558955488">+55 11 95589-55488</a>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <Image src="/assets/img/logo_pas.jpeg" alt="Logo PsicoAcolheSer" className="img-fluid" width={54} height={54} />
            <h1 className="sitename">PsicoAcolheSer</h1>
          </Link>

          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link href="#hero" className="active" onClick={handleLinkClick}>Início</Link></li>
              <li><Link href="#about" onClick={handleLinkClick}>Sobre</Link></li>
              <li><Link href="#services" onClick={handleLinkClick}>Serviços</Link></li>
              <li><Link href="#doctors" onClick={handleLinkClick}>Equipe</Link></li>
              <li><Link href="#appointment" onClick={handleLinkClick}>Agendamento</Link></li>
              <li className={`dropdown ${activeDropdown === 'main-dropdown' ? 'dropdown-active' : ''}`}>
                <a href="#" onClick={(e) => toggleDropdown(e, 'main-dropdown')}>
                  <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={`${activeDropdown === 'main-dropdown' ? 'dropdown-active' : ''}`}>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className={`dropdown ${activeDropdown === 'deep-dropdown' ? 'dropdown-active' : ''}`}>
                    <a href="#" onClick={(e) => toggleDropdown(e, 'deep-dropdown')}>
                      <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul className={`${activeDropdown === 'deep-dropdown' ? 'dropdown-active' : ''}`}>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><Link href="#contact" onClick={handleLinkClick}>Contato</Link></li>
            </ul>
            <i 
              className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileNav}
            ></i>
          </nav>

          <Link className="cta-btn d-none d-sm-block" href="#appointment" onClick={handleLinkClick}>Marque um agendamento</Link>
        </div>
      </div>
    </header>
  );
}