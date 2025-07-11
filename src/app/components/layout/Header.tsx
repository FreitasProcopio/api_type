import Link from 'next/link';
import '@/app/styles/header.css';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link href="/" className="header__home">
        <img src="/globe.svg" alt="Logo WAW" />
        WAW
      </Link>
      <nav className="header__nav">
        <a href="#letter" className="header__link"></a>
        <a href="#about" className="header__link">Talk to me about your idea!</a>
        <a href="#faq" className="header__link">FAQ</a>
      </nav>
    </div>
  </header>
);