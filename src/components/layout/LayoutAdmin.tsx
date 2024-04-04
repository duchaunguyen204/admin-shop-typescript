import React from 'react'
import { Outlet } from 'react-router-dom'
interface Props {

}

const LayoutAdmin: React.FC<Props> = () => {
    return (
        <div>
            <div className='layoutadmin'>
                <ul style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    width: '25%',
                    backgroundColor: '#f1f1f1',
                    position: 'fixed',
                    height: '100%',
                    overflow: 'auto',
                }}>
                    <li><a className="active" href="http://localhost:5173/admin/products#productManagement" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Trang chính</a></li>
                    <li><a href="http://localhost:5173/admin/products/add" role="button" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Thêm Sản phẩm</a></li>
                    <li><a href="#contact" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Bình luận</a></li>
                    <li><a href="#about" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Đơn hàng</a></li>
                    <li><a className="active" href="http://localhost:5173/admin/products/login" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Đăng nhập</a></li>
                <li><a className="active" href="http://localhost:5173/admin/products/register" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Đăng Ký</a></li>         
                   <li><a className="active" href="http://localhost:5173/" style={{
                        display: 'block',
                        color: '#000',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}>Về  trang chủ</a></li>
                </ul>
                <div style={{ marginLeft: '25%', padding: '1px 16px', height: 1000 }}>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin
