import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <States></States>

            <div className='py-5 min-h-screen text-center'>
                <h2 className='text-4xl font-bold py-3'>Trending Apps</h2>
                <p className='text-sm'>Explore All Trending Apps on the Market Developed by Us</p>

                <div className='my-8 mx-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
                <Card></Card>
                </div>

                <div className='flex justify-center'>
                    <button className='btn bg-linear-to-tr from-purple-600 to-purple-400 text-white'>Show All</button>
                </div>
            </div>
        </>
    );
};

export default Home;