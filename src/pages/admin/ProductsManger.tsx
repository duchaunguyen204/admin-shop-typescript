// Trong file ProductsManager.tsx
import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/Product';



type   Props = {
    products: Product[];
    onRemove : (id : string | number | undefined) => void
}

const ProductsManager= ({products, onRemove} : Props ) => {
 
    return (
        <div>
            <br />
            <h1 style={{ paddingLeft: "60px", color: "red" }}>Quản lí sản phẩm</h1>
            <hr />
            <div className="container">
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá tiền</th>
                            <th>Ảnh</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} /></td>

                                <td>
                                    <Link to={`/admin/products/${item.id}/edit`} className="btn btn-success">Edit</Link>
                                    <button className='btn btn-danger' onClick={() => onRemove(item.id)} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsManager;
