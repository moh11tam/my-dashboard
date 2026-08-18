import React, { useState } from 'react'
import Logo from './Logo'
import { FaWhatsapp } from 'react-icons/fa'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false); // إغلاق القائمة بعد النقر في الهاتف
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" dir="rtl">
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 5%;
          max-width: 1200px;
          margin: 0 auto;
          position: sticky;
          top: 0;
          background: rgba(8, 8, 10, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
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
          gap: 12px;
        }

        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #25D366;
          color: #ffffff;
          padding: 9px 18px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
        }

        .whatsapp-btn:hover {
          background-color: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.35);
        }

        /* زر القائمة للشاشات الصغيرة */
        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 24px;
          cursor: pointer;
        }

        /* 📱 التجاوب مع الهواتف والأجهزة اللوحية */
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

          .nav-actions {
            gap: 8px;
          }

          .whatsapp-btn {
            padding: 7px 14px;
            font-size: 12px;
          }
        }
      `}</style>

      <Logo />

      {/* القائمة الرئيسية */}
      <ul className="nav-links">
        <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="nav-link">الخدمات</a></li>
        <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="nav-link">المميزات</a></li>
        <li><a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="nav-link">الأسعار</a></li>
        <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="nav-link">اتصل بنا</a></li>
      </ul>

      {/* زر الواتساب وزر الهامبرغر للموبايل */}
      <div className="nav-actions">
        <a 
          href="https://wa.me/213663575873" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-btn"
        >
          <FaWhatsapp size={19} />
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