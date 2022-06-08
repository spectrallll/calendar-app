import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import {Layout} from "antd";
import Navbar from './components/Navbar';

const App: React.FC = () => {
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
