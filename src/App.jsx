import React, { useState, useMemo } from 'react'
import { Routes, Route } from "react-router-dom";

import FeedPage from './pages/FeedPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header'
import Footer from './components/Footer';
import { ArchivedContext } from './hooks/ArchivedContext';

function App() {

    const [archived, setArchived] = useState('unarchived')

    const value = useMemo(
        () => ({ archived, setArchived }), 
        [archived]
      );

    return (
        <ArchivedContext.Provider value={value}>
            <div className="container relative font-poppins overflow-hidden">
                <Header/>
                <div className="container-view">
                        <Routes>   
                            <Route exact path='/' element={<FeedPage/>}/>
                            <Route exact path='/:id' element={<DetailPage/>}/>
                        </Routes>
                </div>
                <Footer/>
            </div>
        </ArchivedContext.Provider>
    );
}

export default App;
