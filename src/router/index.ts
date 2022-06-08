import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string,
    component: React.FC,
    exact?: boolean
}


export enum RoutesNames{
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {
        path: RoutesNames.LOGIN, exact: true, component: Login
    }
]

export const privateRoutes: IRoute[] = [
    {
        path: RoutesNames.EVENT, exact: true, component: Event
    }
]