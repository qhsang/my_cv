import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
    return (
        <section className="overview">
            <h2>Profile</h2>
            <p>
                - 3 years of experience with Unity and C#, specializing in mobile games for Android, iOS, and WebGL.<br />
                - Proficient in in-app purchases (IAP), ads integration, analytics tools, and using React to create WebGL game templates and basic game websites.<br />
                - Skilled in Node.js for API development, authentication systems, and SQL database management.<br />
                - Experienced in Docker, server-side development with Kotlin, and applying OOP principles and SOLID design patterns.
            </p>
            <hr className="divider" />
        </section>
    );
};

export default Profile;