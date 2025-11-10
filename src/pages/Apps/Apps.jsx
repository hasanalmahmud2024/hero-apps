import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const [searchItem, setSearchItem] = useState('');
    const [filteredApps, setFilteredApps] = useState([]);
    
    const apps = useLoaderData()
    // console.log(apps);

    useEffect(()=>{
        setFilteredApps(apps)
    },[apps])

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchItem(value);
        const filtered = apps.filter(app =>  
            app.title.toLowerCase().includes(value.toLowerCase()) 
        );
        setFilteredApps(filtered);
    }

    return (
        <div className='pt-24 max-w-6xl mx-auto text-center mb-8 '>
            <h1 className='text-5xl font-bold py-3'>Our All Applications</h1>
            <p className="text-sm py-2 mb-5">Explore All Apps on the market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center m-4'>
                <h4 className='text-xl font-semibold'>({filteredApps.length}) Apps Found</h4>
                <label className="input w-64">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search Apps" onChange={handleSearch} value={searchItem} />
                </label>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-4'>
                {filteredApps.length > 0 ?
                    filteredApps.map((app) => <Card key={app.id} app={app}></Card>) :
                    <p className='flex items-center justify-center col-span-full text-3xl text-center min-h-[20vw]'>No App Found</p>

                }
            </div>
        </div>
    );
};

export default Apps;

