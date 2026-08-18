function Logo() {
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '8px', /* تقريب الأجزاء من بعضها لمنع التباعد */
      cursor: 'pointer', 
      userSelect: 'none' 
    }}>
      
      {/* 1. اسم الموقع بتناسق تام في الأحجام والارتفاع */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-end',
        justifyContent: 'center',
        lineHeight: '0.85'
      }}>
        <span style={{ 
          color: '#FFFFFF', 
          fontSize: '24px', 
          fontWeight: '900', 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.5px'
        }}>
          MOH
        </span>
        <span style={{ 
          color: '#F59E0B', 
          fontSize: '20px', 
          fontWeight: '900', 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.5px',
          marginTop: '2px'
        }}>
          WEB
        </span>
      </div>

      {/* 2. عربة التسوق المصممة بانسجام هندسي كامل مع النص */}
      <svg width="60" height="50" viewBox="0 0 100 85" fill="none" style={{ overflow: 'visible' }}>
        
        {/* مقبض وجسم العربة المنسجم */}
        <path 
          d="M 12 18 L 28 18 L 38 56 C 52 75 88 70 94 40 C 96 28 88 18 80 18" 
          stroke="#FFFFFF" 
          strokeWidth="7" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* المثلث/السهم البرتقالي الصغير المدمج في الزاوية */}
        <path 
          d="M 28 35 L 38 48 L 28 48 Z" 
          fill="#F59E0B" 
        />

        {/* العجلات المربوطة بأسفل العربة بدقة */}
        <circle cx="46" cy="72" r="7" fill="#F59E0B" />
        <circle cx="82" cy="72" r="7" fill="#F59E0B" />

        {/* حرف M الموزون والمستقر تماماً داخل تجويف العربة */}
        <text 
          x="62" 
          y="38" 
          fill="#FFFFFF" 
          fontSize="32" 
          fontWeight="900" 
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          transform="rotate(10 62 38)"
        >
          M
        </text>

      </svg>

    </div>
  )
}

export default Logo