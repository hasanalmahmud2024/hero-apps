import React, { useEffect, useState } from 'react';
import InstalledCard from '../../components/InstalledCard/InstalledCard';
import { useLoaderData } from 'react-router';
import { addToStoredDB, getStoredApps } from '../../utility/addToDB';

const Installation = () => {
    const [appList, setAppList] = useState([]);
    const [sortOption, setSortOption] = useState('Name');

    const apps = useLoaderData();
    // console.log(apps);

    const storedAppIds = getStoredApps()
    // console.log(storedAppIds); // array of id string
    const convertedStoredAppIds = storedAppIds.map(id => parseInt(id));
    // console.log(convertedStoredAppIds);

    const installedApps = apps.filter(app => convertedStoredAppIds.includes(app.id));
    // console.log(installedApps); // installed apps

    useEffect(() => {
        setAppList(installedApps);
        // console.log(installedApps); 
    }, []);



    const handleUninstall = (id) => {
        console.log(id); // number
        const updatedAppList = appList.filter(app => app.id !== id);
        setAppList(updatedAppList);
        console.log(updatedAppList);

        const updatedAppIds = updatedAppList.map(app => app.id);
        const updatedAppIdsSTR = JSON.stringify(updatedAppIds);
        localStorage.setItem('InstalledApps', updatedAppIdsSTR)
    }


    return (
        <div className='pt-24 max-w-6xl mx-auto mb-5 min-h-screen'>
            <h1 className='text-5xl font-bold py-3 text-center'>Your Installed Apps</h1>
            <p className="text-sm py-2 mb-5 text-center">Explore All Trending Apps on the market developed by us</p>

            <div className='flex justify-between items-center m-4'>
                <h4 className='text-xl font-semibold'>1 Apps Found</h4>
                <div className='dropdown dropdown-center'>
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort By {sortOption}
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                        <li onClick={() => setSortOption('Size')}><a>Size</a></li>
                        <li><a>Time</a></li>
                    </ul>
                </div>
            </div>


            <div className="list rounded-box gap-3">
                {appList.length > 0 ? (
                    appList.map(app => <InstalledCard key={app.id} app={app} handleUninstall={handleUninstall} />)
                ) : (
                        <p className='flex items-center justify-center text-3xl text-center min-h-[20vw]'>No App Installed</p>
                )}
            </div>
        </div>
    );
};

export default Installation;