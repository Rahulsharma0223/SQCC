import React from 'react';
import './event.modules.css';
import bgImage from './images/bg.jpg'; // Path to your background image
import eventImage from './images/event.png'; // Path to your event image

const Event = () => {
    return (
        <div className="event-background" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="event-title">EVENTS</h2>
            <div className="event-container">
                <div className="event-card">
                    <img src={eventImage} alt="Event" className="event-card-image" />
                    <div className="event-details">
                        <h3 className="event-name">Event Name</h3>
                        <p className="event-date">Oct..... 2024</p>
                    </div>
                </div>
                <button className="learn-more-button">Learn More</button>
            </div>
        </div>
    );
}

export default Event;
