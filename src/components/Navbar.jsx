import React, { useState } from 'react'
import Logo from './Logo'
import { FaWhatsapp } from 'react-icons/fa'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" dir="rtl">
      <style>{`
        /* 🟢 تثبيت الشريط العلوي ليتحرك ويهبط مع الصفحة */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 5%;
          max-width: 1200px;
          margin: 0 auto;
          position: sticky;
          top: 0;
          background: rgba(8, 8, 10, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9999;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover { color: #ffffff; }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* 🟢 زر الواتساب الأخضر الثابت والمتتبع */
        .whatsapp-btn-nav {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #25D366;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          white-space: nowrap;
        }

        .whatsapp-btn-nav:hover {
          background-color: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-toggle-btn { display: block; }

          .nav-links {
            position: absolute;
            top: 100%;
            right: 0;
            width: 100%;
            background: #0d0d12;
            flex-direction: column;
            padding: 20px 0;
            gap: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: ${mobileMenuOpen ? 'flex' : 'none'};
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          }

          .whatsapp-btn-nav {
            padding: 6px 12px;
            font-size: 12px;
          }
        }
      `}</style>

      <Logo />

      <ul className="nav-links">
        <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="nav-link">الخدمات</a></li>
        <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="nav-link">المميزات</a></li>
        <li><a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="nav-link">الأسعار</a></li>
        <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="nav-link">اتصل بنا</a></li>
      </ul>

      <div className="nav-actions">
        <a 
          href="https://wa.me/213663575873" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-btn-nav"
        >
          <FaWhatsapp size={16} />
          <span>تواصل معنا</span>
        </a>

        <button className="mobile-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar