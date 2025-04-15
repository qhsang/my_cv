import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
    return (
        <section className="experience">
            <h2>Experience</h2>

            {/* First Stage */}
            <div className="stage">
                <h3>Unity Developer</h3>
                <div className="stage1">
                    <p className="date">5/2022 - 7/2023</p>
                    <p>Developed several games using Unity. Each game includes a GitHub repository and a YouTube demo:</p>
                    <ul className="game-links">
                        <li>
                            <span>Game 1:</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> |
                            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </li>
                        <li>
                            <span>Game 2:</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> |
                            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </li>
                        <li>
                            <span>Game 3:</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> |
                            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </li>
                        <li>
                            <span>Game 4:</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> |
                            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="divider" />

            {/* Second Stage */}
            <div className="stage">
                <h3>Mid Software Engineer at Senspark</h3>
                <div className="stage2">
                    <p className="date">7/2023 - Present</p>
                    <p>Responsibilities and skills:</p>
                    <ul className="skills">
                        <li>Developed mobile and WebGL games using Unity.</li>
                        <li>Implemented multiplayer game servers using SmartFox by Kotlin.</li>
                        <li>Created React templates for WebGL games.</li>
                        <li>Developed backend APIs using Node.js.</li>
                        <li>Performed database queries and managed Docker containers.</li>
                    </ul>
                </div>
            </div>
        </section>
);
};

export default Experience;