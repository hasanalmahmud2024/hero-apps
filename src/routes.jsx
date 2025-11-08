import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Apps from './pages/Apps/Apps';
import Root from './pages/Root/Root';
import Installation from './pages/Installation/Installation';
import AppDetails from './pages/AppDetails/AppDetails';
import AppDetailsError from './pages/AppDetailsError/AppDetailsError';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: (
        <ErrorPage></ErrorPage>
    ),
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('/appsData.json'),
            },
            {
                path: '/apps',
                Component: Apps,
                loader: () => fetch('/appsData.json'),

            },
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path: '/appDetails/:id',
                Component: AppDetails,
                loader: () => fetch('/appsData.json'),
                errorElement: (
                    <AppDetailsError></AppDetailsError>
                ),
            }

        ]
    },
]);

