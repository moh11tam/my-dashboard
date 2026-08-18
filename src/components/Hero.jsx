import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Hero() {
  return (
    <div className="hero-content-wrapper" dir="rtl">
      <style>{`
        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 60px auto 40px auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .badge-capsule {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          font-size: 14px;
          color: #e5e7eb;
          margin-bottom: 30px;
        }

        .main-heading {
          font-size: 58px;
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #c084fc, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-description {
          font-size: 18px;
          color: #9ca3af;
          max-width: 700px;
          margin: 0 auto 40px auto;
          line-height: 1.7;
        }

        .cta-btn {
          background-color: #25D366;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: inherit;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .cta-btn:hover {
          background-color: #20ba5a;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        }

        .glow-bottom {
          position: absolute;
          top: 300px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 350px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .main-heading { font-size: 38px; }
          .sub-description { font-size: 15px; }
          .cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* 2. الواجهة الرئيسية */}
      <div className="hero-content">
        <div className="badge-capsule">✨ ابدأ مشروعك الرقمي الآن ⚡</div>
        <h1 className="main-heading">
          منصتك الموثوقة الشاملة
          <br />
          <span className="gradient-text">في التجارة الإلكترونية</span>
        </h1>
        <p className="sub-description">
          نساعدك تبني، تتوسع، وتنمي متجرك الإلكتروني بكل سهولة مع حلول جد مبتكرة .
          <br />
          طور ، تتبع ، و تحكم في متجرك كله في مكان واحد .
        </p>
        <a 
          href="https://wa.me/213663575873" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn"
        >
          <FaWhatsapp size={22} />
          <span>تواصل معنا لبدء متجرك الآن ⬅</span>
        </a>
      </div>

      <div className="glow-bottom"></div>
    </div>
  )
}

export default Hero