import { productsData } from '../data/products'

function Shop() {
  // دالة عند الضغط على زر الشراء
  const handleBuy = (productName) => {
    alert(`تمت إضافة "${productName}" إلى سلة التسوق بنجاح! 🛒✨`);
  }

  return (
    <div className="shop-container">
      <style>{`
        .shop-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .shop-title {
          text-align: center;
          font-family: 'Cairo', sans-serif;
          font-size: 36px;
          color: #FFD700;
          margin-bottom: 30px;
        }

        /* شبكة المنتجات المرنة */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        /* بطاقة المنتج الواحد */
        .product-card {
          background-color: #1e1e1e;
          border: 2px solid #333;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .product-card:hover {
          border-color: #FFD700;
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }

        .product-icon {
          font-size: 50px;
          margin-bottom: 15px;
        }

        .product-name {
          font-size: 20px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .product-desc {
          font-size: 14px;
          color: #aaa;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .product-price {
          font-size: 18px;
          font-weight: bold;
          color: #FFD700;
          margin-bottom: 15px;
        }

        .buy-btn {
          background: linear-gradient(45deg, #FFD700, #FFA500);
          color: #000;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
          width: 100%;
        }

        .buy-btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }
      `}</style>

      <h2 className="shop-title">📦 متجرنا الإلكتروني المميز</h2>

      {/* عرض المنتجات تلقائياً من ملف البيانات */}
      <div className="products-grid">
        {productsData.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-icon">{item.image}</div>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-desc">{item.description}</p>
            <div className="product-price">{item.price}</div>
            <button className="buy-btn" onClick={() => handleBuy(item.name)}>
              شراء الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop