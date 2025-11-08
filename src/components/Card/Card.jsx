import React from 'react';
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'
import demoImg03 from '../../assets/demo-app (3).webp'
import { Link } from 'react-router';

const Card = ({app}) => {
    // console.log(app.id);
    const { image={demoImg03}, id,  title, downloads, ratingAvg,} = app;
    
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='flex-1'>
                <div className="card bg-base-100 shadow-sm h-full">
                    <figure className="px-2 pt-4">
                        <img
                            src={image}
                            alt={`${title} icon `}
                            className="rounded-xl " />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{title}</h2>
                        <div className=" flex justify-between ">
                            <div className="badge badge-soft badge-success">
                                <img src={iconDownloads} className='w-4' alt="" />
                                {downloads}
                            </div>
                            <div className="badge badge-soft badge-warning">
                                <img src={iconRatings} className='w-4' alt="" />
                                {ratingAvg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;