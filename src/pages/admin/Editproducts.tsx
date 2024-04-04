import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { Product } from '../../interfaces/Product';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../services/productService';

type Props = {
    onSubmit: (product: Product) => void;
}

const Schema = Joi.object({
    name: Joi.string().required().min(3).max(255),
    price: Joi.number().required().min(0),
    description: Joi.string().optional().allow(''),
    image: Joi.string().optional().uri(),
});

const Editproducts = ({ onSubmit }: Props) => {
    const { handleSubmit, register, formState: { errors } } = useForm<Product>({ resolver: joiResolver(Schema) });
    const [product, setProducts] = useState<Product | null>(null)
    const { id } = useParams();

    useEffect(() => {
        (async () => {
         const {data} = await instance.get(`/products/${id}`)
         setProducts(data)
        }
        )()
       }, []);

    const onEdit = (product: Product) => {
        onSubmit({ ...product, id })
    }

    return (
        <div>
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={handleSubmit(onEdit)}>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control" {...register('name')}
                        defaultValue={product?.name} />
                    {errors.name && <div className='text-danger'>{errors.name.message}</div>}

                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Giá</label>
                    <input type="string" className="form-control" {...register('price')}
                        defaultValue={product?.price} />
                    {errors.price && <div className='text-danger'>{errors.price.message}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register('image')}
                        defaultValue={product?.image} />

                </div>
                <button type="submit" className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

export default Editproducts;
