import React from 'react'
import { 
  FaLaptopCode, FaShoppingCart, FaRocket, FaBuilding, 
  FaMobileAlt, FaTachometerAlt, FaSearch, FaCreditCard, FaCogs,
  FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle
} from 'react-icons/fa'

import analyticsImg from '../assets/hero-analytics.jpg'
import heroVideo from '../assets/hero-video.mp4'

function ServicesSection() {
  const servicesList = [
    { icon: <FaLaptopCode size={22} />, title: "تصميم مواقع" },
    { icon: <FaShoppingCart size={22} />, title: "متاجر إلكترونية" },
    { icon: <FaRocket size={22} />, title: "صفحات هبوط" },
    { icon: <FaBuilding size={22} />, title: "م مواقع شركات" },
    { icon: <FaMobileAlt size={22} />, title: "تصميم متجاوب" },
    { icon: <FaTachometerAlt size={22} />, title: "سرعة فائقة" },
    { icon: <FaSearch size={22} />, title: "تهيئة SEO" },
    { icon: <FaCreditCard size={22} />, title: "دفع وشحن" },
    { icon: <FaCogs size={22} />, title: "لوحة تحكم" },
  ]

  const featuresList = [
    "سرعة استجابة فائقة وتحميل سريع للأصفحات",
    "تصميم عصري ومتجاوب مع جميع الهواتف والشاشات",
    "حماية وأمان عالي للبيانات والمعلومات",
    "دعم فني وتحديثات مستمرة بعد تسليم المشروع",
    "تهيئة متكاملة لمحركات البحث (SEO)",
    "لوحة تحكم باللغة العربية سهلة الاستخدام"
  ]

  // 🟢 تم استبدال الأرقام بعبارة طلب عرض مخصص
  const pricingPlans = [
    { title: "الموقع التعريفي", price: "✨ اطلب عرضًا مخصصًا لمشروعك", desc: "مثالي للشركات والمؤسسات والعيادات لعرض خدماتها.", popular: false },
    { title: "المتجر الإلكتروني", price: "✨ اطلب عرضًا مخصصًا لمشروعك", desc: "متجر متكامل لبيع المنتجات مع طرق الدفع والتوصيل.", popular: true },
    { title: "صفحة هبوط (Landing Page)", price: "✨ اطلب عرضًا مخصصًا لمشروعك", desc: "صفحة مخصصة لزيادة المبيعات والتحويل السريع.", popular: false },
  ]

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about-services-section" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        .about-services-section { 
          color: #ffffff; 
          width: 100%; 
          font-family: 'Cairo', sans-serif !important; 
        }

        .full-width-image-wrapper { width: 100%; position: relative; margin-top: 40px; margin-bottom: 60px; overflow: hidden; }
        .full-width-image { width: 100%; max-height: 500px; object-fit: cover; display: block; }
        .image-overlay-blend {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, transparent 30%, #08080a 95%),
                      linear-gradient(to bottom, #08080a 0%, transparent 20%, transparent 80%, #08080a 100%);
          pointer-events: none;
        }
        .section-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .about-text-content { text-align: center; max-width: 900px; margin: 0 auto 50px auto; }
        .about-badge {
          display: inline-block; background: rgba(168, 85, 247, 0.15); color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3); padding: 6px 18px; border-radius: 20px;
          font-size: 14px; font-weight: bold; margin-bottom: 20px;
        }
        .about-heading { 
          font-family: 'Cairo', sans-serif !important;
          font-size: 38px; 
          font-weight: 900; 
          line-height: 1.5; 
          margin-bottom: 25px; 
        }
        .about-paragraph { 
          font-family: 'Cairo', sans-serif !important;
          color: #9ca3af; 
          font-size: 17px; 
          line-height: 1.9; 
          margin-bottom: 20px; 
        }
        
        .video-wrapper-container {
          max-width: 950px; margin: 50px auto; position: relative; border-radius: 20px; padding: 3px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(245, 158, 11, 0.2), rgba(168, 85, 247, 0.1));
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2);
        }
        .video-box { width: 100%; border-radius: 18px; overflow: hidden; background: #000; display: flex; }
        .hero-video-element { width: 100%; height: auto; max-height: 480px; object-fit: cover; display: block; }
        
        .second-description-box {
          text-align: center; max-width: 900px; margin: 40px auto 60px auto;
          background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 35px 30px; border-radius: 20px;
        }

        .second-title {
          font-family: 'Cairo', sans-serif !important;
          font-size: 32px !important; 
          font-weight: 800 !important; 
          color: #ffffff; 
          margin-bottom: 20px;
          line-height: 1.6 !important;
          letter-spacing: normal !important;
          background: linear-gradient(135deg, #ffffff 20%, #c084fc 100%);
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent;
        }

        .cta-button {
          font-family: 'Cairo', sans-serif !important;
          margin-top: 25px; background: linear-gradient(135deg, #a855f7, #7e22ce);
          color: #ffffff; border: none; padding: 14px 32px; font-size: 16px; font-weight: bold;
          border-radius: 30px; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
        }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(168, 85, 247, 0.6); }

        .services-ticker-container { margin: 30px 0 60px 0; overflow: hidden; position: relative; padding: 20px 0; }
        .services-ticker-container::before, .services-ticker-container::after {
          content: ""; position: absolute; top: 0; width: 100px; height: 100%; z-index: 2; pointer-events: none;
        }
        .services-ticker-container::before { right: 0; background: linear-gradient(to left, #08080a, transparent); }
        .services-ticker-container::after { left: 0; background: linear-gradient(to right, #08080a, transparent); }
        .services-ticker-track { display: flex; gap: 30px; width: max-content; animation: scrollTicker 25s linear infinite; }
        .services-ticker-track:hover { animation-play-state: paused; }
        @keyframes scrollTicker { 0% { transform: translateX(0); } 100% { transform: translateX(50%); } }

        .circle-service-item {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          width: 120px; height: 120px; border-radius: 50%; background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(168, 85, 247, 0.3); padding: 15px; text-align: center;
          transition: all 0.3s ease; cursor: pointer;
        }
        .circle-service-item:hover { background: rgba(168, 85, 247, 0.15); border-color: #c084fc; transform: scale(1.08); }

        .features-section { background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 24px; padding: 50px 30px; margin: 60px 0; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
        .feature-item { display: flex; align-items: center; gap: 15px; background: rgba(255, 255, 255, 0.03); padding: 18px 20px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.05); }

        .pricing-section { margin: 70px 0; text-align: center; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 40px; }
        .pricing-card { background: #121216; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 35px 25px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
        .pricing-card.popular { border-color: #a855f7; background: linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, #121216 100%); transform: translateY(-8px); }

        /* 🟣 تنسيق الخط الجديد ليظهر بوضوح وبحجم مثالي */
        .custom-quote-text {
          font-size: 20px;
          font-weight: 800;
          color: #c084fc;
          margin: 20px 0;
          line-height: 1.5;
          font-family: 'Cairo', sans-serif !important;
        }

        .contact-section { background: rgba(18, 18, 22, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 50px 30px; margin: 70px auto 40px auto; }
        .contact-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
        .contact-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 18px; padding: 25px; text-align: center; text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; transition: all 0.3s; }
        .contact-card:hover { border-color: #a855f7; background: rgba(168, 85, 247, 0.08); transform: translateY(-5px); }

        .site-footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 40px 20px 20px 20px; margin-top: 60px; background: #050507; text-align: center; }

        @media (max-width: 1024px) {
          .about-heading { font-size: 30px !important; }
          .second-title { font-size: 26px !important; }
          .section-container { padding: 0 15px; }
        }

        @media (max-width: 768px) {
          .about-heading { font-size: 24px !important; line-height: 1.5 !important; }
          .second-title { font-size: 22px !important; line-height: 1.5 !important; }
          .about-paragraph { font-size: 15px !important; }
          .full-width-image { max-height: 280px !important; }
          .hero-video-element { max-height: 300px !important; }
          .circle-service-item { width: 95px !important; height: 95px !important; padding: 8px !important; }
          .pricing-grid, .features-grid, .contact-cards-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
          .second-description-box, .features-section, .contact-section { padding: 25px 15px !important; margin: 35px 0 !important; }
          .cta-button { width: 100% !important; padding: 12px 20px !important; }
          .custom-quote-text { font-size: 18px !important; }
        }
      `}</style>

      {/* الصورة */}
      <div className="full-width-image-wrapper">
        <img src={analyticsImg} alt="تحليلات الموقع وتطوير الويب" className="full-width-image" />
        <div className="image-overlay-blend"></div>
      </div>

      <div className="section-container">
        {/* المقدمة */}
        <div className="about-text-content">
          <span className="about-badge">خدمات تطوير مواقع الويب</span>
          <h2 className="about-heading">حوّل فكرتك إلى حضور رقمي احترافي مع خدمات تطوير مواقع الويب</h2>
          <p className="about-paragraph">في عالم الأعمال الحديث، لم يعد امتلاك موقع إلكتروني احترافي خيارًا، بل أصبح ضرورة لكل مشروع يسعى إلى النمو والنجاح.</p>
        </div>

        {/* الفيديو */}
        <div className="video-wrapper-container">
          <div className="video-box">
            <video src={heroVideo} autoPlay loop muted playsInline className="hero-video-element" />
          </div>
        </div>

        {/* وصف ودعوة لاتخاذ إجراء */}
        <div className="second-description-box">
          <h3 className="second-title">خطوة واحدة... قد تغير مستقبل تجارتك 🚀</h3>
          <p className="about-paragraph">موقع ويب احترافي يجعل تجارتك أقرب إلى عملائك من أي وقت مضى.</p>
          <button className="cta-button" onClick={scrollToContact}>تواصل معنا الآن للبدء 🚀</button>
        </div>

        {/* 🟢 1. قسم الخدمات */}
        <div id="services" style={{ textAlign: 'center', paddingTop: '40px' }}>
          <span className="about-badge">خدماتنا المتميزة</span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Cairo, sans-serif' }}>مجالات <span style={{ color: '#c084fc' }}>تميزنا ورعايتنا</span></h3>
        </div>

        <div className="services-ticker-container">
          <div className="services-ticker-track">
            {[...servicesList, ...servicesList, ...servicesList].map((service, index) => (
              <div className="circle-service-item" key={index} onClick={scrollToContact}>
                <div style={{ color: '#c084fc', marginBottom: '8px' }}>{service.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'Cairo, sans-serif' }}>{service.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 🟢 2. قسم المميزات */}
        <div id="features" className="features-section">
          <div style={{ textAlign: 'center' }}>
            <span className="about-badge">لماذا تختارنا؟</span>
            <h3 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Cairo, sans-serif' }}>مميزات <span style={{ color: '#c084fc' }}>خدماتنا الرقمية</span></h3>
          </div>
          <div className="features-grid">
            {featuresList.map((feat, i) => (
              <div className="feature-item" key={i}>
                <FaCheckCircle color="#c084fc" size={20} />
                <span style={{ fontSize: '15px', color: '#e5e7eb', fontFamily: 'Cairo, sans-serif' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🟢 3. قسم الأسعار والعروض المخصصة */}
        <div id="pricing" className="pricing-section">
          <span className="about-badge">باقات واضحة</span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Cairo, sans-serif' }}>خطط <span style={{ color: '#c084fc' }}>تناسب مشروعك</span></h3>

          <div className="pricing-grid">
            {pricingPlans.map((plan, idx) => (
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={idx}>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Cairo, sans-serif' }}>{plan.title}</h4>
                  
                  {/* العبارة المخصصة البديلة للسعر */}
                  <div className="custom-quote-text">
                    {plan.price}
                  </div>

                  <p style={{ color: '#9ca3af', fontSize: '14px', fontFamily: 'Cairo, sans-serif' }}>{plan.desc}</p>
                </div>
                <button className="cta-button" style={{ width: '100%', marginTop: '20px' }} onClick={scrollToContact}>اطلب الآن</button>
              </div>
            ))}
          </div>
        </div>

        {/* 🟢 4. قسم اتصل بنا */}
        <div id="contact" className="contact-section">
          <div style={{ textAlign: 'center' }}>
            <span className="about-badge">نحن هنا لخدمتك</span>
            <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '10px', fontFamily: 'Cairo, sans-serif' }}>تواصل معنا المباشر</h3>
            <p style={{ color: '#9ca3af', fontFamily: 'Cairo, sans-serif' }}>يسعدنا الإجابة على جميع استفساراتك وبدء مشروعك فوراً</p>
          </div>

          <div className="contact-cards-grid">
            <div className="contact-card">
              <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><FaMapMarkerAlt size={24} /></div>
              <div style={{ fontWeight: 'bold', fontFamily: 'Cairo, sans-serif' }}>الموقع</div>
              <div style={{ color: '#d1d5db', marginTop: '5px', fontFamily: 'Cairo, sans-serif' }}>الجزائر - Algeria 🇩🇿</div>
            </div>

            <a href="tel:+213663575873" className="contact-card">
              <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><FaPhoneAlt size={22} /></div>
              <div style={{ fontWeight: 'bold', fontFamily: 'Cairo, sans-serif' }}>رقم الهاتف</div>
              <div style={{ color: '#d1d5db', marginTop: '5px', direction: 'ltr' }}>+213 663575873</div>
            </a>

            <a href="https://wa.me/213663575873" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><FaWhatsapp size={26} /></div>
              <div style={{ fontWeight: 'bold', fontFamily: 'Cairo, sans-serif' }}>WhatsApp</div>
              <div style={{ color: '#d1d5db', marginTop: '5px', direction: 'ltr' }}>+213 663575873</div>
            </a>
          </div>
        </div>

      </div>

      <footer className="site-footer">
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', fontFamily: 'Cairo, sans-serif' }}>تطوير المواقع الاحترافية</div>
        <div style={{ marginTop: '20px', color: '#6b7280', fontSize: '13px', fontFamily: 'Cairo, sans-serif' }}>
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </section>
  )
}

export default ServicesSection