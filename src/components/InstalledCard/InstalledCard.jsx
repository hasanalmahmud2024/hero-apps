import React from 'react';
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'


const InstalledCard = ({ app, handleUninstall }) => {
    // console.log(app);
    const {id, image, title, downloads, ratingAvg, size} = app;
    
    
    return (
        <div className='list-row bg-base-100 items-center'>
            <div><img className="size-10 rounded-box" src={image} /></div>
            <div className='space-y-1 font-semibold'>
                <div className='ml-2'>{title}</div>
                <div className="text-sm uppercase  flex items-center ">
                    <div className="badge text-green-500">
                        <img src={iconDownloads} className='w-3' alt="" />
                        {downloads}
                    </div>
                    <div className="badge text-orange-400">
                        <img src={iconRatings} className='w-3' alt="" />
                        {ratingAvg}
                    </div>
                    <div className='px-1 opacity-60'>{size} MB</div>
                </div>
            </div>
            <button onClick={() => handleUninstall(id)} className="btn btn-success text-white">Uninstall</button>
        </div>
    );
};

export default InstalledCard;