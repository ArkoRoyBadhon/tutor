import Navbar from '@/components/navbar';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;