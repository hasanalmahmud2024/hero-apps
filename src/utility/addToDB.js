import { toast } from "react-toastify";


const getStoredApps = () => {
    const storedAppDataStr = localStorage.getItem('InstalledApps');
    if (storedAppDataStr) {
        const storedAppsData = JSON.parse(storedAppDataStr);
        // console.log(storedAppsData); // array of strings
        return storedAppsData;

    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    // console.log(id); // string
    
    const storedAppsData = getStoredApps();
    
    if (storedAppsData.includes(id)) {
        toast.error('This App is Already Installed')
    } else {
        storedAppsData.push(id);
        toast.success('App Installed');
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem("InstalledApps", data);
    }
}




export {addToStoredDB, getStoredApps}