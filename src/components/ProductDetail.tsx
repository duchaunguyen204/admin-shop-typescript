import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderPage from './Header';
import FooterPage from './Footer';
import instance from '../services/productService';
import { Product } from '../interfaces/Product';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState<Product | null>(null)

  useEffect(() => {
    (async () => {
     const {data} = await instance.get(`/products/${id}`)
     setProducts(data)
    }
    )()
   }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>

<HeaderPage/>


   <div className="card" style={{paddingTop:"10px"}}>
    <hr />
    <h1>Chuột Gaming</h1>
    <br />
    <p> <a href="http://localhost:5173/" className="fa fa-home" style={{textDecoration:"none"}}>Trang chủ</a>/ Chuột máy tính - Chuột Gaming</p>
<br />
  <div className="container-fliud">
    <form name="frmsanphamchitiet" id="frmsanphamchitiet" method="post" action="/php/twig/frontend/giohang/themvaogiohang">
      <input type="hidden" name="sp_ma" id="sp_ma" defaultValue={5} />
      <input type="hidden" name="sp_ten" id="sp_ten" defaultValue="Samsung Galaxy Tab 10.1 3G 16G" />
      <input type="hidden" name="sp_gia" id="sp_gia" defaultValue={10990000.00} />
      <input type="hidden" name="hinhdaidien" id="hinhdaidien" defaultValue="samsung-galaxy-tab-10.jpg" />
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane" id="pic-1">
              <img src={product.image} />
            </div>
            <div className="tab-pane" id="pic-2">
              <img src={product.image}/>
            </div>
            <div className="" style={{height:"400px"}}>
              <img src={product.image} />
            </div>
          </div>
          <ul className="preview-thumbnail nav nav-tabs">
            <li className="active">
              <a data-target="#pic-1" data-toggle="tab" >
                <img src={product.image} />
              </a>
            </li>
            <li >
              <a data-target="#pic-2" data-toggle="tab" >
                <img src={product.image} />
              </a>
            </li>
            <li >
              <a data-target="#pic-3" data-toggle="tab" className="active">
                <img src={product.image} />
              </a>
            </li>
          </ul>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{product.name}</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no">999 reviews</span>
          </div>
          <p className="product-description">Màn hình 10.1 inch cảm ứng đa điểm</p>
          <small className="text-muted">Giá cũ: <s><span>10,990,000.00 vnđ</span></s></small>
          <h4 className="price">Giá hiện tại: <span>{product.price}</span></h4>
          <p className="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
            <strong>Uy
              tín</strong>!
          </p>
          <h5 className="colors">colors:
            <span className="color orange not-available" data-toggle="tooltip" title="Hết hàng" />
            <span className="color green" />
            <span className="color blue" />
          </h5>
          <div className="form-group">
            <label htmlFor="soluong">Số lượng đặt mua:</label>
            <input type="number" className="form-control" id="soluong" name="soluong" />
          </div>
          <div className="action">
            <a className="add-to-cart btn btn-default" id="btnThemVaoGioHang" style={{backgroundColor:"yellow"}}>Thêm vào giỏ hàng</a>
            <a className="like btn btn-default" href="#"><span className="fa fa-heart" /></a>
          </div>
        </div>
      </div>
    </form>
  </div>
  <hr />
  <br />
  <FooterPage/>
</div>

    </div>
    

  );
};

export default ProductDetail;
