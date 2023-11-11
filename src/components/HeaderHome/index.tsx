import React, { useState, useEffect } from 'react';
import OrientaBot from '@/assets/img/header/OrientaLogo.svg';
import { Container, ButtonMenu, Ul } from './style';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export function HeaderHome() {
  const [headerCor, setheaderCor] = useState(false);

  useEffect(function () {
    function posScroll() {
      if (window.scrollY >= 100) {
        setheaderCor(true);
      } else {
        setheaderCor(false);
      }
    }
    window.addEventListener('scroll', posScroll);
  }, []);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Comandos',
      link: '/comandos'
    }
  ];
  return (
    <Container $headerCor={headerCor}>
      <nav>
        <div>
          <Image src={OrientaBot} alt="Logo" className="logo" priority={true} />
          <p>
            ORIENTA <span>BOT</span>
          </p>
        </div>
        <Ul $open={open} $headerCor={headerCor}>
          {navLink.map(({ link, name }) => (
            <Link
              onClick={() => setOpen(!open)}
              key={name}
              href={link}
              className={`${pathname === link ? 'active' : ''}`}
            >
              {name}
            </Link>
          ))}
        </Ul>
        <button type="button" className="noneD">
          Acessar o Bot
        </button>
        <ButtonMenu $open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </ButtonMenu>
      </nav>
    </Container>
  );
}
