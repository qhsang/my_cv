import React from 'react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="education-item">
                <p>Mechatronics Engineer</p>
                <p className="university">Ho Chi Minh City University of Technology and Education</p>
                <p className="duration">2018 - 2022</p>
            </div>
        </section>
    );
};

export default Education;