import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Apps from './pages/Apps/Apps';
import Root from './pages/Root/Root';
import Installation from './pages/Installation/Installation';
import AppDetails from './pages/AppDetails/AppDetails';

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

            },
            {
                path: '/apps',
                Component: Apps,

            },
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path: '/appDetails',
                Component: AppDetails
            }

        ]
    },
]);

