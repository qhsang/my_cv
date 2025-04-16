import React from 'react';
import './App.css';
import Information from "./Component/Information/Information";
import Experience from "./Component/Experience/Experience";
import Education from "./Component/Education/Education";
import Profile from "./Component/Profile/Profile";

const App: React.FC = () => {
    return (
        <div className="App">
            <Information />
            <Profile />
            <Experience />
            <Education />
        </div>
    );
};

export default App;