import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import Dashboard from './components/Dashboard'

function App() {
  // 1️⃣ حالة تسجيل الدخول وبيانات الزبون
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // حالة التحكم بفتح وإغلاق النوافذ المنبثقة (Modals)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  // دالة تُستدعى عند نجاح الدخول أو التسجيل
  const handleLoginSuccess = () => {
    setCurrentUser({ name: "أحمد بن علي", email: "ahmed@example.com" });
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  // دالة تسجيل الخروج للعودة للموقع الرئيسي
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // 🔴 في حال كان الزبون مسجلاً للدخول، تظهر لوحة التحكم مباشرة
  if (isLoggedIn) {
    return <Dashboard user={currentUser} onLogout={handleLogout} />
  }

  // 🟢 في حال عدم تسجيل الدخول، تظهر الواجهة الرئيسية والخدمات
  return (
    <div className="hero-container">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600;800;900&display=swap');

        .hero-container {
          background-color: #08080a;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          min-height: 100vh;
          color: #ffffff;
          font-family: 'Cairo', sans-serif;
          position: relative;
          overflow: hidden;
        }
      `}</style>

      {/* 1. شريط التنقل العلوي */}
      <Navbar 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* 2. قسم الواجهة الرئيسية (الهيرو) */}
      <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* 3. قسم الخدمات مع الصورة المدمجة */}
      <ServicesSection />

      {/* 4. النافذة الخاصة بتسجيل الدخول */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />

      {/* 5. النافذة الخاصة بإنشاء حساب */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        onRegisterSuccess={handleLoginSuccess}
      />

    </div>
  )
}

export default App