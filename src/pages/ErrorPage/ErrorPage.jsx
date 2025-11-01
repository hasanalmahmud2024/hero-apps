import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-sm">
                        <img src={errorImg} alt="404 not found" />
                        <h1 className="text-5xl font-bold">Oops, page not found!</h1>
                        <p className="py-6">
                            The page you are looking for is not available.
                        </p>
                        <Link to={'/'}>
                            <button className="btn bg-linear-to-tr from-purple-600 to-purple-400 text-white">Go Back!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;