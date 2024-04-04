
import HeaderPage from '../components/Header'
import Banner from '../components/Banner'
import ProductList from './../components/ProductList';
import FooterPage from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../interfaces/Product';
import instance from '../services/productService';

const Homepages = () => {

    const [products, setProducts] = useState<Product[]>([]);

  // [GET]:
  useEffect(() => {
   (async () => {
    const {data} = await instance.get("/products")
    setProducts(data)
   }
   )()
  }, []);

    return (
        <div>
            <HeaderPage/>
            <Banner/>
            <ProductList products={products} />
            <FooterPage/>
                    
        </div>
    )
}

export default Homepages
