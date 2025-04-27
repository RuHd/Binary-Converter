'use client'

import React, { useEffect, useMemo, useState } from 'react';
import './Dropnumber.css';


const Dropnumber = () => {
    const [num, setnum] = useState(0)
    const stylesProperties = useMemo(() => {
        let randX = Math.floor(Math.random() * 100); // Random X position
        let randDelay = Math.floor(Math.random() * 3000); // Random delay between 0 and 1000ms
        let randDuration = Math.random() * 500 + 5000; // Random duration between 1000ms and 3000ms
        let randSize = Math.floor(Math.random() * 2) + 1; // Random size between 10px and 30px
        let randBlur = Math.floor(Math.random() * 4); // Random blur between 0px and 5px

        return {
            left: `${randX}vw`,
            animationDelay: `${randDelay}ms`,
            animationDuration: `${randDuration}ms`,
            fontSize: `${randSize}em`,
            filter: `blur(${randBlur}px)`,
        };
    }, [])
    
    useEffect(() => {
        const interval = setInterval(() => {
            let randValue = Math.floor(Math.random() * 100); 
            setnum(randValue);
        }, 500); // Update every 500ms

        return () => clearInterval(interval); // Cleanup on unmount

    }, [num])
    
    return (
        <span className='dropnumber' style={stylesProperties}>{num}</span>
    );
};

export default Dropnumber;