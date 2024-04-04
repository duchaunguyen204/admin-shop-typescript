
import { Link } from 'react-router-dom';
import { Product } from '../interfaces/Product';

  

type Props = {
  products : Product[];
}
const ProductList = ({products} : Props) => {
  return (
    <div>
      <br />
      <h1 style={{ paddingLeft: "60px" }}>Sản phẩm bán chạy</h1>
      <hr />
      <div className="container">

        {products.map((item) => (

          <div className="product-card" key={item.id} style={{padding:"10px"}}>
            <div className="card">
              <Link to={`/products/${item.id}`} className="nav-link">
                <img style={{width:"300px",height:"300px"}} src={item.image}  alt={item.name} />
              </Link>
             
              <div className="card-body">
              <Link to={`/products/${item.id}`} className="nav-link">
              <h5 >{item.name}</h5>
              </Link>
              <Link to={`/products/${item.id}`} className="nav-link">
              <p >{item.price}đ</p>
              </Link>
              <Link to={`/products/${item.id}`} className="nav-link">
              <button className="btn btn-primary">Xem sản Phẩm</button>
              </Link>
                
              </div>
            </div>
          </div>
        ))}

      </div>
<br />
      <h1 style={{ paddingLeft: "20px" }}>Sản phẩm mới ra mắt</h1>
<hr />
<br />
      
    </div>

  );
};

export default ProductList;
