import React from 'react';
import './App.css';
import Profile from "./Component/Profile/Profile";
import Experience from "./Component/Experience/Experience";
import Education from "./Component/Education/Education";
import Overview from "./Component/Overview/Overview";

const App: React.FC = () => {
    return (
        <div className="App">
            <Profile />
            <Overview />
            <Experience />
            <Education />
        </div>
    );
};

export default App;