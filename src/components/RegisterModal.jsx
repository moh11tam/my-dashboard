import { FaTimes, FaUser, FaLock, FaEnvelope, FaPhone, FaRocket } from 'react-icons/fa'

function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <style>{`
        /* 1. إصلاح شامل لحساب الحجم والمحاذاة */
        .auth-modal-overlay,
        .auth-modal-overlay * {
          box-sizing: border-box !important;
          margin: 0;
          padding: 0;
        }

        /* 2. تثبيت الغلاف في المنتصف بدون استخدام rtl على المستوى الخارجي */
        .auth-modal-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100dvh !important;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 999999 !important;
          padding: 12px !important;
        }

        /* 3. البطاقة الداخلية العائمة في المنتصف تماماً */
        .auth-modal-card {
          background: #121216;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 20px;
          width: 92% !important; /* نستخدم نسبة مئوية أمنية للتجاوب */
          max-width: 360px !important; /* عرض مريح جداً للهواتف */
          padding: 24px 18px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.15);
          animation: modalFadeIn 0.25s ease-out;
          font-family: 'Cairo', system-ui, -apple-system, sans-serif;
          direction: rtl !important; /* تطبيق الاتجاه العربي داخل البطاقة فقط */
          text-align: right;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        .close-btn {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #9ca3af;
          font-size: 14px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 18px;
        }

        .auth-badge {
          display: inline-block;
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .auth-title {
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .auth-subtitle {
          color: #9ca3af;
          font-size: 12px;
        }

        .input-group {
          position: relative;
          margin-bottom: 10px;
          width: 100%;
        }

        .input-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
          font-size: 14px;
        }

        .auth-input {
          width: 100% !important;
          background: #1a1a22;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px 38px 10px 12px;
          color: #ffffff;
          font-size: 13px;
          outline: none;
          text-align: right;
          font-family: inherit;
        }

        .auth-input:focus {
          border-color: #f59e0b;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #ffffff;
          border: none;
          padding: 11px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
        }
      `}</style>

      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} type="button">
          <FaTimes />
        </button>

        <div className="auth-header">
          <span className="auth-badge">انضم اليوم</span>
          <h3 className="auth-title">إنشاء حساب جديد 🚀</h3>
          <p className="auth-subtitle">أنشئ حسابك وابدأ بتأسيس حضورك الرقمي فوراً</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="الاسم الكامل" className="auth-input" required />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="البريد الإلكتروني" className="auth-input" required />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input type="tel" placeholder="رقم الهاتف" className="auth-input" required />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="كلمة السر" className="auth-input" required />
          </div>

          <button type="submit" className="submit-btn">
            <FaRocket /> إنشاء حساب الآن
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterModal