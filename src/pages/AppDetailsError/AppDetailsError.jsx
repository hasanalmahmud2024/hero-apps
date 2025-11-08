import React from 'react';
import AppError from '../../assets/App-Error.png'

const AppDetailsError = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-sm">
                        <img src={AppError} alt="404 not found" />
                        <h1 className="text-5xl font-bold">OOPS!! APP NOT FOUND!</h1>
                        <p className="py-6">
                            The App you are requesting is not found on our system.  please try another apps                        </p>
                        <Link to={'/'}>
                            <button className="btn bg-linear-to-tr from-purple-600 to-purple-400 text-white">Go Back!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsError;