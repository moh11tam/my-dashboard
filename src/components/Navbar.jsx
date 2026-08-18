import React, { useState } from 'react'
import Logo from './Logo'

function Navbar({ onOpenLogin, onOpenRegister }) {
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
    <nav className="navbar">
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

        .btn-login {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
        }

        .btn-start {
          background-color: #a855f7;
          color: #ffffff;
          border: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
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

          .btn-login, .btn-start {
            padding: 6px 12px;
            font-size: 13px;
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

      {/* الأزرار وزر الهامبرغر للموبايل */}
      <div className="nav-actions">
        <button className="btn-login" onClick={onOpenLogin}>تسجيل الدخول</button>
        <button className="btn-start" onClick={onOpenRegister}>البدء الآن</button>
        <button className="mobile-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar