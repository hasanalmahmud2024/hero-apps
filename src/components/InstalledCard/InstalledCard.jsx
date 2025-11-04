import React from 'react';
import demoImg01 from '../../assets/demo-app (1).webp'
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'


const InstalledCard = () => {
    return (
        <div className='list-row bg-base-100 items-center'>
            <div><img className="size-10 rounded-box" src={demoImg01} /></div>
            <div className='space-y-1 font-semibold'>
                <div className='ml-2'>Forest: Focus for Productivity</div>
                <div className="text-sm uppercase  flex items-center ">
                    <div className="badge text-green-500">
                        <img src={iconDownloads} className='w-3' alt="" />
                        9M
                    </div>
                    <div className="badge text-orange-400">
                        <img src={iconRatings} className='w-3' alt="" />
                        5
                    </div>
                    <div className='px-1 opacity-60'>298MB</div>
                </div>
            </div>
            <button className="btn btn-success text-white">Uninstall</button>
        </div>
    );
};

export default InstalledCard;