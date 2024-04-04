// Trong file App.tsx
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import './components/style.css';
import LayoutAdmin from './components/layout/LayoutAdmin';
import Addproducts from './pages/admin/Addproducts';
import ProductsManger from './pages/admin/ProductsManger';
import LayoutWebsite from './components/layout/LayoutWebsite';
import Homepages from './pages/homepages';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Editproducts from './pages/admin/Editproducts';
import { Product } from './interfaces/Product';
import instance from './services/productService';



const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  // [GET]:
  useEffect(() => {
   (async () => {
    const {data} = await instance.get("/products")
    setProducts(data)
   }
   )()
  }, []);


  const handleRemove = async (id: number | string | undefined) => {
    try {
      const confirm = window.confirm("Are You Sure ^_^")
      if (confirm) {
        await instance.delete(`products/${id}`);
        // Xóa sản phẩm khỏi danh sách sản phẩm
        setProducts(products.filter(item => item.id !== id));
        alert("Delete Complete ^_^");
        navigate('/admin/products')
      }
    } catch (error) {
      console.log('Error deleting product: ', error);
    }
  }
  // [POST]:
  const onhandelAdd = (product: Product) => {
    (async () => {
          const { data } = await instance.post(`/products`,product);
          setProducts([...products, data]);
          alert("Add Complete ^_^")
          navigate('/admin/products')
        })();

  }
  
  // [UPDATER]:
  const onhandleEdit = (product: Product) => {
    (async () => {
          const { data } = await instance.put(`products/${product.id}`,product);
          setProducts(products.map(item => item.id === product.id ? data : item));
          alert("Edit Complete ^_^")
          navigate('/admin/products')
        })();

  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Homepages />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup  />} />

        </Route>

        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products" element={<ProductsManger products={products} onRemove={handleRemove} />} />
          <Route path="products/add" element={<Addproducts onSubmit={onhandelAdd} />} />
          <Route path="products/:id/edit" element={<Editproducts onSubmit={onhandleEdit} />} />
          <Route path="products/login" element={<Login />} />
          <Route path="products/register" element={<Signup  />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
