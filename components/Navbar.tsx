'use client';
import React from 'react';
import NavLinks from '@/components/NavLinks';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathname = usePathname();
    return(
        <div>
            {pathname=== '/' && <NavLinks/> }
        </div>
    )
}
