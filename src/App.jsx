import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'

function App() {
  return (
    <div className="hero-container" dir="rtl">
      
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
      <Navbar />

      {/* 2. قسم الواجهة الرئيسية (الهيرو) */}
      <Hero />

      {/* 3. قسم الخدمات مع الصور والمحتوى الكامل */}
      <ServicesSection />

    </div>
  )
}

export default App