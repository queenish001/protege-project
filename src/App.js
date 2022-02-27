import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails, SignUp } from './components/index.js';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/homepage" element={<Homepage />} />


                            <Route path="/exchanges" element={<Exchanges />} />


                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />


                            <Route path="/crypto/:coinId" element={<CryptoDetails />} />


                            <Route path="/news" element={<News />} />

                            <Route path="/signup" element={<SignUp />} />


                        </Routes>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Crypto Project <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/homepage">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;