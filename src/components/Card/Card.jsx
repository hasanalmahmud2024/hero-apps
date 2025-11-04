import React from 'react';
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'

const Card = () => {
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm h-full">
                <figure className="px-2 pt-4">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl " />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Forest: Focus for Productivity</h2>
                    <div className=" flex justify-between ">
                        <div className="badge badge-soft badge-success">
                            <img src={iconDownloads} className='w-4' alt="" />
                            9M
                        </div>
                        <div className="badge badge-soft badge-warning">
                            <img src={iconRatings} className='w-4' alt="" />
                            5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;