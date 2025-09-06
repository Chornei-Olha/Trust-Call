'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react'; // иконки для бургера

const navLinks = [
  { href: '#about', label: 'Про компанію' },
  { href: '#cases', label: 'Кейси' },
  { href: '#benefits', label: 'Переваги співпраці' },
  { href: '#pricing', label: 'Тарифи' },
  { href: '#reviews', label: 'Відгуки' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black/40 backdrop-blur-[5px] z-[9999] w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 fixed">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] md:text-[30px] font-medium font-unbounded text-white uppercase tracking-wider"
        >
          TRUST-CALL
        </Link>

        {/* Desktop меню */}
        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex gap-8 text-inter">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-[16px] font-bold text-white hover:text-[#1663d3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="brand"
            size="sm"
            className="text-[9px] font-medium font-unbounded uppercase tracking-wider px-3 py-3"
            onClick={() => {
              const formEl = document.getElementById('form');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            отримати консультацію
          </Button>
        </div>

        {/* Mobile бургер */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile выпадающее меню */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-6 px-4">
          <nav className="flex flex-col gap-6 text-center text-inter">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)} // закрывать меню при клике
                className="text-[18px] font-bold text-white hover:text-[#1663d3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <Button
              variant="brand"
              size="sm"
              className="text-[9px] font-medium font-unbounded uppercase tracking-wider px-3 py-3"
              onClick={() => {
                const formEl = document.getElementById('form');
                if (formEl) {
                  formEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              отримати консультацію
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
