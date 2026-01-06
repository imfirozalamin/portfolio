'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isProjectPage = pathname.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only track active section on home page
      if (isHomePage) {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Set active section to 'projects' when on project detail page
  useEffect(() => {
    if (isProjectPage) {
      setActiveSection('projects');
    }
  }, [isProjectPage]);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  const isActive = (itemId) => activeSection === itemId;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/60 backdrop-blur-xl' 
        : 'bg-black/30 backdrop-blur-md'
    }`}>
      <nav className="w-full px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            Firuz Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(item.id) 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(item.id) 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black/60 backdrop-blur-xl rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                isHomePage ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium ${
                      isActive(item.id) 
                        ? 'text-purple-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className={`transition-colors duration-200 font-medium ${
                      isActive(item.id) 
                        ? 'text-purple-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}