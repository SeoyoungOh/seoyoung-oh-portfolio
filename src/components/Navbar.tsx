import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: isHomePage ? '#hero' : '/' },
    { label: 'Approach', href: isHomePage ? '#approach' : '/#approach' },
    { label: 'Work', href: isHomePage ? '#work' : '/#work' },
    { label: 'Publications', href: isHomePage ? '#publications' : '/#publications' },
    { label: 'Journey', href: isHomePage ? '#journey' : '/#journey' },
    { label: 'Expertise', href: isHomePage ? '#expertise' : '/#expertise' },
    { label: 'Contribution', href: isHomePage ? '#contribution' : '/#contribution' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (isHomePage) {
        const id = href.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FBFBFF]/90 backdrop-blur-md border-b border-[#D9DDEE] shadow-xs py-3'
          : 'bg-[#FBFBFF] py-4 border-b border-[#D9DDEE]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#9091DF] rounded-md p-1"
          aria-label="Seoyoung Oh Homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-[#20243C] text-[#FBFBFF] flex items-center justify-between px-2 font-bold text-sm tracking-widest group-hover:bg-[#9091DF] transition-colors">
            <span>S</span>
            <span className="text-white">O</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#20243C] tracking-tight group-hover:text-[#9091DF] transition-colors">
              {portfolioData.profile.name}
            </span>
            <span className="text-[11px] font-medium text-[#626A7C] hidden sm:inline">
              Medical AI & Evidence Translation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-xs font-semibold uppercase tracking-wider text-[#20243C]/80 hover:text-[#20243C] hover:bg-[#A0A1F8]/10 px-3 py-2 rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#20243C] hover:bg-[#9091DF] text-[#FBFBFF] px-4 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            aria-label="Download CV (PDF)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#20243C] hover:bg-[#D9DDEE]/40 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#20243C] text-[#FBFBFF] z-40 flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col gap-2 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg font-bold tracking-wide text-[#FBFBFF] hover:text-[#A0A1F8] py-3 border-b border-[#D9DDEE]/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A0A1F8]" />
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#D9DDEE]/20 flex flex-col gap-4">
            <a
              href={portfolioData.profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 bg-[#A0A1F8] text-[#20243C] font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider hover:bg-[#B6BAFA] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <p className="text-xs text-[#626A7C] text-center">
              {portfolioData.profile.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
