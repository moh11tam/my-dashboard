import React, { useState } from 'react'
import { 
  FaPaperPlane, FaWhatsapp, FaGlobeAfrica, FaCity, 
  FaCheck, FaBars, FaTimes, FaRocket, FaClock, 
  FaCheckCircle, FaLaptopCode, FaStore, FaMobileAlt, 
  FaBullhorn, FaSignOutAlt, FaUserCircle, FaListUl, FaHome
} from 'react-icons/fa'

function Dashboard({ user, onLogout }) {
  // حالة شريط القائمة للموبايل (همبرغر)
  const [menuOpen, setMenuOpen] = useState(false)

  // حالة نموذج الطلب
  const [requestText, setRequestText] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // بيانات مرحلة المشروع الحية
  const stages = [
    { name: "استلام الطلب", completed: true },
    { name: "التصميم (UI/UX)", completed: true },
    { name: "التطوير والبرمجة", current: true },
    { name: "المراجعة والاختبار", completed: false },
    { name: "الإطلاق الرسمي 🚀", completed: false }
  ]

  // قائمة الخدمات/الباقات
  const servicesList = [
    {
      icon: <FaStore size={28} color="#c084fc" />,
      title: "المتاجر الإلكترونية المتكاملة",
      desc: "متجر إلكتروني حديث متجاوب مع الهواتف، ربط بوابات الدفع وشركات الشحن، ولوحة تحكم احترافية.",
      badge: "الأكثر طلباً"
    },
    {
      icon: <FaLaptopCode size={28} color="#c084fc" />,
      title: "تطوير المواقع والمنصات",
      desc: "م مواقع تعريفية، منصات تعليمية أو خدمية مصممة خصيصاً بأحدث التقنيات وأسرع أداء.",
      badge: "تخصصي"
    },
    {
      icon: <FaMobileAlt size={28} color="#c084fc" />,
      title: "تطبيقات الهواتف الذكية",
      desc: "تطبيقات Android و iOS سلسة وسريعة لربط مشروعك بالزبائن مباشرة على هواتفهم.",
      badge: "احترافي"
    },
    {
      icon: <FaBullhorn size={28} color="#c084fc" />,
      title: "التسويق الرقمي والربط",
      desc: "إعداد بكسل الإعلانات (Facebook/TikTok Pixels)، تحسين محركات البحث SEO، وربط Google Analytics.",
      badge: "نمو المبيعات"
    }
  ]

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="dashboard-container">
      <style>{`
        /* 🛠️ ضبط شامل يمنع أي خروج عن الحيز بداخل الصفحة */
        .dashboard-container * {
          box-sizing: border-box;
        }

        .dashboard-container {
          background-color: #08080a;
          min-height: 100vh;
          color: #ffffff;
          font-family: inherit;
          overflow-x: hidden; /* يمنع ظهور شريط التمرير الأفقي في الشاشات الصغيرة */
        }

        /* 🟢 1. الشريط العلوي الذكي */
        .top-navbar {
          background: rgba(13, 13, 18, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 15px 5%;
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          font-size: 18px;
          font-weight: 900;
          color: #c084fc;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* مراحل التطوير أفقية للكمبيوتر */
        .desktop-stages {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stage-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #6b7280;
        }

        .stage-pill.completed {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .stage-pill.current {
          background: rgba(168, 85, 247, 0.2);
          border-color: #a855f7;
          color: #ffffff;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
        }

        .menu-toggle-btn {
          display: none;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          color: #ffffff;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .menu-toggle-btn:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: #a855f7;
        }

        /* 📱 القائمة الجانبية المنسدلة المحدثة للهاتف */
        .mobile-stages-dropdown {
          display: none;
          background: #0d0d12;
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
          padding: 20px 5%;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
        }

        .user-profile-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }

        .user-email {
          font-size: 12px;
          color: #9ca3af;
        }

        .mobile-stages-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-logout-btn {
          width: 100%;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 10px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        /* 🟢 2. المحتوى الرئيسي */
        .main-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* 🟢 3. حقل طلب الخدمة (تم تحسينه لمنع الخروج) */
        .order-card {
          background: #121216;
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 24px;
          padding: 35px;
          margin-bottom: 35px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          width: 100%;
          overflow: hidden; /* يضمن احتواء جميع عناصر الفورم */
        }

        .order-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .order-subtitle {
          color: #9ca3af;
          font-size: 14px;
          margin-bottom: 25px;
        }

        /* 🛠️ حقل الكتابة الكبير المصلح */
        .large-textarea {
          width: 100%;
          max-width: 100%;
          min-height: 140px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 16px;
          color: #ffffff;
          font-size: 15px;
          font-family: inherit;
          resize: vertical;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box; /* حماية أكيدة من الخروج */
        }

        .large-textarea:focus {
          border-color: #a855f7;
          background: rgba(168, 85, 247, 0.02);
        }

        .inputs-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
          margin-top: 20px;
          width: 100%;
        }

        .input-box-wrapper {
          position: relative;
          width: 100%;
        }

        .input-box-wrapper svg {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          z-index: 2;
        }

        /* 🛠️ خانات الإدخال المصلحة */
        .custom-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 12px 42px 12px 15px; /* مسافة تتناسب مع موقع الأيقونة */
          color: #ffffff;
          font-size: 14px;
          outline: none;
          font-family: inherit;
          box-sizing: border-box; /* حماية أكيدة من الخروج */
        }

        .custom-input:focus {
          border-color: #a855f7;
        }

        .submit-order-btn {
          margin-top: 25px;
          width: 100%;
          background: linear-gradient(135deg, #a855f7, #9333ea);
          color: #ffffff;
          border: none;
          padding: 15px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .submit-order-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
        }

        /* 🟢 4. شبكة باقات الخدمات */
        .services-section-title {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .service-sculpted-card {
          background: #121216;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .service-sculpted-card:hover {
          border-color: rgba(168, 85, 247, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
        }

        .badge-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          font-size: 11px;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .card-icon {
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .card-desc {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* 🟢 5. الشريط الماركي المتنقل */
        .marquee-container {
          background: rgba(168, 85, 247, 0.06);
          border: 1px solid rgba(168, 85, 247, 0.15);
          border-radius: 16px;
          padding: 14px 0;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 40px;
          width: 100%;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 22s linear infinite;
        }

        .marquee-text {
          font-size: 15px;
          font-weight: 600;
          color: #e5e7eb;
          margin-right: 50px;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        /* 📱 التجاوب المطور للشاشات الهواتف */
        @media (max-width: 820px) {
          .desktop-stages { display: none; }
          .desktop-logout-btn { display: none; }
          .menu-toggle-btn { display: flex; align-items: center; gap: 6px; }
          
          .mobile-stages-dropdown.open {
            display: flex;
          }

          .order-card {
            padding: 20px;
          }

          .order-title {
            font-size: 20px;
          }

          .inputs-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 🟢 1. الشريط العلوي */}
      <header className="top-navbar">
        <div className="brand-logo">
          <FaRocket size={20} />
          لوحة طلبات الزبون
        </div>

        {/* مراحل التطوير للشاشات الكبيرة */}
        <div className="desktop-stages">
          {stages.map((st, idx) => (
            <div key={idx} className={`stage-pill ${st.completed ? 'completed' : ''} ${st.current ? 'current' : ''}`}>
              {st.completed ? <FaCheckCircle /> : st.current ? <FaClock /> : null}
              {st.name}
            </div>
          ))}
        </div>

        {/* أزرار التحكم بالكمبيوتر والموبايل */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="desktop-logout-btn"
            onClick={onLogout}
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <FaSignOutAlt /> خروج
          </button>

          {/* زر الهمبرغر المطور */}
          <button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* 📱 القائمة الجانبية الهومبرغر المخصصة للهواتف */}
      <div className={`mobile-stages-dropdown ${menuOpen ? 'open' : ''}`}>
        
        {/* معلومات المستخدم */}
        <div className="user-profile-badge">
          <FaUserCircle size={32} color="#c084fc" />
          <div className="user-profile-info">
            <span className="user-name">{user?.name || "المستخدم"}</span>
            <span className="user-email">{user?.email || "user@example.com"}</span>
          </div>
        </div>

        {/* قسم مراحل تقدم المشروع */}
        <div className="mobile-stages-wrapper">
          <div style={{ fontSize: '13px', color: '#c084fc', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaListUl /> مراحل تقدم مشروعك الحية:
          </div>
          {stages.map((st, idx) => (
            <div key={idx} className={`stage-pill ${st.completed ? 'completed' : ''} ${st.current ? 'current' : ''}`} style={{ justifyContent: 'flex-start', padding: '8px 12px' }}>
              {st.completed ? <FaCheckCircle /> : st.current ? <FaClock /> : null}
              {st.name}
            </div>
          ))}
        </div>

        {/* زر تسجيل الخروج للموبايل */}
        <button className="mobile-logout-btn" onClick={onLogout}>
          <FaSignOutAlt /> تسجيل الخروج من الحساب
        </button>

      </div>

      {/* 🟢 2. المحتوى الرئيسي */}
      <main className="main-content">

        {/* رسالة تأكيد عند إرسال الطلب */}
        {submitted && (
          <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', color: '#22c55e', padding: '15px 20px', borderRadius: '14px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
            ✅ تم استلام طلبك بنجاح! سيتواصل معك فريقنا الفني عبر الواتساب في أقرب وقت.
          </div>
        )}

        {/* 🟢 3. حقل تسجيل الطلب */}
        <div className="order-card">
          <div className="order-title">صف لنا مشروعك أو الخدمة التي تريدها 📝</div>
          <p className="order-subtitle">اكتب كافة التفاصيل والمميزات التي ترغب في توفرها في موقعك أو متجرك وسنتكفل بالتنفيذ:</p>

          <form onSubmit={handleSubmitOrder}>
            <textarea 
              className="large-textarea"
              placeholder="مثال: أود إنشاء متجر إلكتروني لبيع الملابس مع ربط بوابة دفع CIB والذهبية وشحن Yalidine، ..."
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              required
            ></textarea>

            <div className="inputs-row">
              <div className="input-box-wrapper">
                <FaGlobeAfrica />
                <input 
                  type="text" 
                  className="custom-input" 
                  placeholder="اسم البلد (مثلاً: الجزائر)" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-wrapper">
                <FaCity />
                <input 
                  type="text" 
                  className="custom-input" 
                  placeholder="المدينة / الولاية" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-wrapper">
                <FaWhatsapp color="#25D366" />
                <input 
                  type="tel" 
                  className="custom-input" 
                  placeholder="رقم الواتساب للتواصل" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-order-btn">
              <FaPaperPlane /> تأكيد وإرسال الطلب للمطورين
            </button>
          </form>
        </div>

        {/* 🟢 4. بطاقات الخدمات */}
        <h2 className="services-section-title">خدماتنا المتاحة للتنفيذ 💡</h2>
        <div className="cards-grid">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="service-sculpted-card">
              <span className="badge-tag">{srv.badge}</span>
              <div>
                <div className="card-icon">{srv.icon}</div>
                <div className="card-title">{srv.title}</div>
                <div className="card-desc">{srv.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 5. النص التوصيفي المتحرك */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">✨ نلتزم بتسليم مشاريعكم في الآجال المحددة وبأعلى معايير الجودة والسرعة.</span>
            <span className="marquee-text">🚀 دعم فني متواصل وحماية كاملة لجميع بياناتك ومتجرك الرقمي.</span>
            <span className="marquee-text">💎 حلول برمجية مخصصة تجعل مشروعك يبرز بين المنافسين في السوق.</span>
          </div>
        </div>

      </main>
    </div>
  )
}
