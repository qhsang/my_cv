import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
    return (
        <section className="overview">
            <h2>Profile</h2>
            <p>I have 3 years of experience with Unity and C#. Additionally, I am proficient in Node.js, React, and
                server-side development with Kotlin. I am also knowledgeable in Docker and effectively apply OOP
                principles and SOLID design patterns.</p>
            <hr className="divider"/>
        </section>

    );
};

export default Profile;