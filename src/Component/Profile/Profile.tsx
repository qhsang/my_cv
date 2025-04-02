import React, { useState } from 'react';
import './Profile.css';
import profileImage from "@asset/me.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faEnvelope, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';
import { profileData } from './ProfileData';

const Profile: React.FC = () => {
    const [tooltip, setTooltip] = useState<{ visible: boolean, text: string, x: number, y: number }>({ visible: false, text: '', x: 0, y: 0 });

    const copyToClipboard = (text: string, event: React.MouseEvent) => {
        navigator.clipboard.writeText(text).then();
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        setTooltip({ visible: true, text: 'Copied!', x: rect.left + rect.width / 2, y: rect.top - 40 });
        setTimeout(() => setTooltip({ ...tooltip, visible: false }), 2000);
    };

    return (
        <section id="profile">
            <img src={profileImage} alt="Profile" id="profileImage" />
            <h2>{profileData.name}</h2>
            <p>{profileData.role}</p>
            <hr id="divider" />
            <div id="contact-info">
                <span>
                    <FontAwesomeIcon icon={faBirthdayCake} /> Birthday: {profileData.birthday}
                </span>
                <span id="copyable" onClick={(e) => copyToClipboard(profileData.email, e)}>
                    <FontAwesomeIcon icon={faEnvelope} /> Email: {profileData.email}
                    <FontAwesomeIcon icon={faCopy} id="copy-icon" />
                </span>
                <span id="copyable" onClick={(e) => copyToClipboard(profileData.phone, e)}>
                    <FontAwesomeIcon icon={faPhone} /> Phone: {profileData.phone}
                    <FontAwesomeIcon icon={faCopy} id="copy-icon" />
                </span>
            </div>
            {tooltip.visible && <div id="tooltip" style={{ left: tooltip.x, top: tooltip.y }}>{tooltip.text}</div>}
        </section>
    );
};

export default Profile;