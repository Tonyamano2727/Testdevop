import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './App.css';

function App() {
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
  const [error, setError] = useState(null); // State để lưu lỗi (nếu có)

  // Hàm để gọi API
  useEffect(() => {
    axios
      .get('http://localhost:3001/product') // Thay fetch bằng axios
      .then((response) => {
        setProducts(response.data); // Lấy dữ liệu từ response và cập nhật state
      })
      .catch((err) => {
        setError(err.message); // Lưu lỗi vào state nếu có
      });
  }, []); // Chỉ chạy 1 lần khi component được mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách sản phẩm</h1>
        {error ? (
          <p style={{ color: 'red' }}>Lỗi: {error}</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
