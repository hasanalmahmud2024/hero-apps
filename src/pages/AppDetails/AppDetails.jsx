import React from 'react';
import demoImg02 from '../../assets/demo-app (2).webp'
import iconRatings from '../../assets/icon-ratings.png'
import iconDownloads from '../../assets/icon-downloads.png'
import iconReview from '../../assets/icon-review.png'
import Recharts from '../../components/Recharts/Recharts';


const AppDetails = () => {
    return (
        <div className='pt-24 max-w-6xl mx-auto mb-5'>
            <div className="card lg:card-side rounded-none">
                <figure>
                    <img
                        className=''
                        src={demoImg02}
                        alt="Album" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">SmPlan:ToDo List with Reminder</h2>
                    <p>Developed by <span className='text-purple-500'>productive.io</span></p>

                    <div className="border opacity-40 mt-2"></div>


                    <div className="flex items-center gap-12 mt-5">
                        <div className="">
                            <img src={iconDownloads} alt="downloads icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">Downloads</div>
                            <div className="stat-value ">31K</div>
                        </div>

                        <div className="">
                            <img src={iconRatings} alt="ratings icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">New Users</div>
                            <div className="stat-value">4,200</div>
                        </div>

                        <div className="">
                            <img src={iconReview} alt="review icon" />
                            <div className="opacity-85 mt-1.5 whitespace-nowrap">New Registers</div>
                            <div className="stat-value">1,200</div>
                        </div>
                    </div>
                    <div className="card-actions mt-2">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            <div className="border opacity-40 md:mt-5 mx-[5vw] md:mx-0"></div>

            <Recharts></Recharts>

        </div>
    );
};

export default AppDetails;