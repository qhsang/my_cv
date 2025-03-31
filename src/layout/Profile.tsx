import React from 'react';
import '../App.css';

const Profile: React.FC = () => {
    return (
        <section className="profile">
            <img src="path/to/your/image.jpg" alt="Profile" />
            <h2>John Doe</h2>
            <p>Software Developer</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </section>
    );
};

export default Profile;