import React from 'react'

function Hero() {
  return (
    <div className="hero-content-wrapper" dir="rtl">
      <style>{`
        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 40px auto 30px auto;
          padding: 0 15px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
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
          margin-bottom: 25px;
        }

        .main-heading {
          font-size: 52px;
          font-weight: 900;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #c084fc, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-description {
          font-size: 17px;
          color: #9ca3af;
          max-width: 700px;
          margin: 0 auto 35px auto;
          line-height: 1.8;
        }

        /* 🔮 الزر البنفسجي الفاخر بدون أيقونة الواتساب */
        .cta-btn-hero {
          background: linear-gradient(135deg, #c084fc 0%, #9333ea 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 14px 32px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-family: inherit;
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
          max-width: 100%;
          box-sizing: border-box;
        }

        .cta-btn-hero:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(168, 85, 247, 0.6);
          background: linear-gradient(135deg, #d8b4fe 0%, #a855f7 100%);
        }

        .glow-bottom {
          position: absolute;
          top: 250px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 600px;
          height: 300px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .main-heading { font-size: 32px; }
          .sub-description { font-size: 14px; }
          .cta-btn-hero { 
            width: 100%; 
            padding: 12px 15px; 
            font-size: 14px;
          }
        }
      `}</style>

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
          className="cta-btn-hero"
        >
          <span>اطلب موقعك الاحترافي الآن 🚀</span>
        </a>
      </div>

      <div className="glow-bottom"></div>
    </div>
  )
}

export default Hero