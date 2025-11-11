import React from 'react';
import { PropagateLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='flex items-center justify-center h-40'>
            <PropagateLoader></PropagateLoader>
        </div>
    );
};

export default LoadingAnimation;