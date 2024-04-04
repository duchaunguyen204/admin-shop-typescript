import React from 'react'
import { Outlet } from 'react-router-dom'
interface Props {
    
}

const LayoutWebsite: React.FC<Props> = () => {
    return (
        <div>
             <Outlet />
        </div>
    )
}

export default LayoutWebsite
