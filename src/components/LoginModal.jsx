import { useState } from 'react'
import { FaTimes, FaLock, FaEnvelope, FaGoogle } from 'react-icons/fa'

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onLoginSuccess) {
      onLoginSuccess()
    }
  }

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <style>{`
        /* 1. إعادة ضبط الأحجام عالمياً داخل النافذة */
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
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          width: 92% !important; /* نسبة مئوية أمنية للتجاوب */
          max-width: 360px !important; /* عرض متناسق جداً للموبايل */
          padding: 24px 18px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(168, 85, 247, 0.15);
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
          transition: all 0.2s;
        }

        .close-btn:hover { 
          color: #ffffff; 
          background: rgba(255, 255, 255, 0.15);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .auth-badge {
          display: inline-block;
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .auth-title {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .auth-subtitle {
          color: #9ca3af;
          font-size: 12px;
          line-height: 1.5;
        }

        .input-group {
          position: relative;
          margin-bottom: 12px;
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
          transition: border-color 0.3s;
          font-family: inherit;
        }

        .auth-input:focus {
          border-color: #a855f7;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #a855f7, #c084fc);
          color: #ffffff;
          border: none;
          padding: 11px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: opacity 0.3s;
          margin-top: 4px;
          font-family: inherit;
        }

        .submit-btn:hover { opacity: 0.9; }

        .divider {
          display: flex;
          align-items: center;
          color: #4b5563;
          font-size: 12px;
          margin: 14px 0;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .divider span { padding: 0 10px; }

        .google-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          font-family: inherit;
        }

        .google-btn:hover { background: rgba(255, 255, 255, 0.1); }
      `}</style>

      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} type="button">
          <FaTimes />
        </button>

        <div className="auth-header">
          <span className="auth-badge">تسجيل الدخول</span>
          <h3 className="auth-title">مرحباً بعودتك!</h3>
          <p className="auth-subtitle">قم بإدخال بيانات حسابك للوصول إلى لوحة التحكم</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="auth-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              placeholder="كلمة السر" 
              className="auth-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="submit-btn">
            دخول الحساب
          </button>
        </form>

        <div className="divider"><span>أو</span></div>

        <button className="google-btn" type="button" onClick={onLoginSuccess}>
          <FaGoogle style={{ color: '#ea4335' }} />
          الدخول باستخدام Google
        </button>
      </div>
    </div>
  )
}

export default LoginModal