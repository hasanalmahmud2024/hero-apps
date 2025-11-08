import React from 'react';
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'
import iconReview from '../../assets/icon-review.png'
import Recharts from '../../components/Recharts/Recharts';
import { useLoaderData, useParams } from 'react-router';
import demoImg03 from '../../assets/demo-app (3).webp'



const AppDetails = () => {
    const appId = useParams();
    // console.log(appId.id);

    const apps = useLoaderData();
    const app = apps.find(app => app.id === parseInt(appId.id));
    // console.log(app);

    const { image, description, size, companyName, title, downloads, ratingAvg, ratings, reviews } = app;


    return (
        <div className='pt-24 max-w-6xl mx-auto mb-5'>
            <div className="card lg:card-side rounded-none">
                <figure>
                    <img
                        src={image}
                        alt={`${title} img`} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>Developed by <span className='text-purple-500'>{companyName}</span></p>

                    <div className="border opacity-40 mt-2"></div>


                    <div className="flex items-center gap-12 mt-5">
                        <div className="">
                            <img src={iconDownloads} alt="downloads icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">Downloads</div>
                            <div className="stat-value ">{downloads}</div>
                        </div>

                        <div className="">
                            <img src={iconRatings} alt="ratings icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">Average Ratings</div>
                            <div className="stat-value">{ratingAvg}</div>
                        </div>

                        <div className="">
                            <img src={iconReview} alt="review icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">Total Reviews</div>
                            <div className="stat-value">{reviews}</div>
                        </div>
                    </div>
                    <div className="card-actions mt-2">
                        <button className="btn btn-success text-white">Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>

            <div className="border opacity-40 md:mt-5 mx-[3vw] md:mx-0"></div>

            <div className='my-4'>
                <h3 className='m-4 text-xl font-semibold'>Ratings</h3>
                <Recharts ratings={ratings}></Recharts>
            </div>

            <div className="border opacity-40 md:mt-5 mx-[3vw] md:mx-0"></div>
            <div className='space-y-5 my-5'>
                <h3 className='card-title'>Description</h3>
                <p className='text-sm opacity-70'>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;