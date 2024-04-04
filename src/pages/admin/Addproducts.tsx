import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

import { useForm } from 'react-hook-form';
import { Product } from '../../interfaces/Product';

type Props = {
    onSubmit: (product: Product) => void;
}

const Schema = Joi.object({
    name: Joi.string().required().min(3).max(255),
    price: Joi.number().required().min(0),
    description: Joi.string().optional().allow(''),
    image: Joi.string().optional().uri(),
});

const Addproducts = ({ onSubmit }: Props) => {
    const { handleSubmit, register, formState: { errors } } = useForm<Product>({ resolver: joiResolver(Schema) });

    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control" {...register('name' , {
                        required: true,
                        minLength: 3,
                        maxLength: 255
                    })} />
                    {errors.name && <div className='text-danger'>{errors.name.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Giá</label>
                    <input type="number" className="form-control" {...register('price',{
                        required: true,
                        min: 3
                    })} />
                    {errors.price && <div className='text-danger'>{errors.price.message}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ảnh</label>
                    <input type="text" className="form-control" {...register('image')} />

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Addproducts;
