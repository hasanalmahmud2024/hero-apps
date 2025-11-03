import React from 'react';

const States = () => {
    return (
        <div>
            {/* states  */}
            <div className='flex flex-col items-center py-14 bg-linear-to-tr from-purple-700 to-purple-400 text-center'>
                <h3 className='text-4xl md:py-8 font-bold text-white'>Trusted By Millions, Built For You</h3>
                <div className='flex flex-col md:flex-row gap-10 md:gap-16 py-6'>
                    <div className='text-center space-y-1 md:space-y-2'>
                        <p className='text-sm'>Total Downloads</p>
                        <h2 className='text-5xl font-bold'>29.6M</h2>
                        <p className='text-sm'>21% More Than Last Month</p>
                    </div>
                    <div className='text-center space-y-1 md:space-y-2'>
                        <p className='text-sm'>Total Reviews</p>
                        <h2 className='text-5xl font-bold'>906K</h2>
                        <p className='text-sm'>46% More Than Last Month</p>
                    </div>
                    <div className='text-center space-y-1 md:space-y-2'>
                        <p className='text-sm'>Active Apps</p>
                        <h2 className='text-5xl font-bold'>132+</h2>
                        <p className='text-sm'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;