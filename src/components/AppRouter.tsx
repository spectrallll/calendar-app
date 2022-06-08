import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../router';
import {useSelector} from "react-redux";
import {selectAuth} from "../store/slices/auth/selectors";

const AppRouter = () => {
    const isAuth = useSelector(selectAuth);
    return (
        isAuth ?
            // @ts-ignore
            <Routes>
                {privateRoutes.map(route => <Route path={route.path} element={<route.component />} key={route.path}/>)}
                <Route path='*' element={<Navigate to={'/'} />}/>
            </Routes>
            :
            // @ts-ignore
            <Routes>
                {publicRoutes.map(route => <Route path={route.path} element={<route.component />} key={route.path}/>)}
                <Route path='*' element={<Navigate to={'/login'} />}/>
            </Routes>
    );
}

export default AppRouter;