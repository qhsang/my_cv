import React from 'react';
import './App.css';
import Header from "./layout/Header";
import Profile from "./layout/Profile";
import Experience from "./layout/Experience";
import Education from "./layout/Education";
import Overview from "./layout/Overview";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <div className="profile-overview-container">
                <Profile />
                <Overview />
            </div>
            <main>
                <Experience />
                <Education />
            </main>
        </div>
    );
};

export default App;