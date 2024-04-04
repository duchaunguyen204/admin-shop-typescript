import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { Users } from '../interfaces/User';
import instance from '../services/productService';
import { useNavigate } from 'react-router-dom';

const Schema = Joi.object({
    email: Joi.string().required().min(3).max(255).email({ tlds: false }),
    password: Joi.string().required().min(3),
    username: Joi.string().optional().min(4),

});

const Signup = () => {


    const  navigate = useNavigate();

    const onRegister = (user: Users) => {
        (async () => {
            const { data } = await instance.post(`/register`, user)
            console.log(data);
            alert("Đăng ký thành công")
            navigate('/login')
        })()
    }


    const { handleSubmit, register, formState: { errors } } = useForm<Users>({ resolver: joiResolver(Schema) });
    return (
        <div>
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit(onRegister)}>
                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input type="text" className="form-control" {...register('username')} />

                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Email</label>
                    <input type="email" className="form-control" {...register('email')} />
                    {errors.email && <div className='text-danger'>{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password')} />
                    {errors.password && <div className='text-danger'>{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Đăng Ký</button>
            </form>
        </div>
    )
}

export default Signup;
