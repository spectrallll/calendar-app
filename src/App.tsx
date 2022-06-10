import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import {Layout} from "antd";
import Navbar from './components/Navbar';
import {useAppDispatch} from "./store/store";
import {setAuth, setUser} from "./store/slices/auth/slice";
import {IUser} from "./store/slices/auth/types";

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {

        if (localStorage.getItem('auth')) {
            dispatch(setUser({username: localStorage.getItem('username' || '')} as IUser));
            dispatch(setAuth(true));
        }
    }, [])

  return (
    <Layout>
        <Navbar />
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
    </Layout>
  );
}

export default App;
