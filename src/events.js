import React from 'react';
import './event.modules.css';
import bgImage from './images/bg.jpg'; // Path to your background image
import eventImage from './images/quantathon1.0.png'; // Path to your event image
import event2Image from './images/comingsoon.jpg';
// import event2Image from './images/quantathon1.0.png'; // Path to your event image

const Event = () => {
    return (
        <div className="event-background" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="event-title">EVENTS</h2>
            <div className="event-container">
                {/* quantathon1.0 event card*/}
                <div className="event-wrapper">
                    <div className="event-card">
                        <img src={eventImage} alt="Event" className="event-card-image" />
                        <div className="event-details">
                            <h3 className="event-name">Quantathon 1.O</h3>
                            <p className="event-date">18th & 19th August 2023</p>
                        </div>
                    </div>
                    <button className="learn-more-button" onClick={() => window.open('https://quantathon.vercel.app/', '_blank')}>
                        Learn More
                    </button>

                </div>
                <div className="event-wrapper">
                    <div className="event-card">
                        <img src={event2Image} alt="Event" className="event-card-image" />
                        <div className="event-details">
                            <h3 className="event-name">Event Name</h3>
                            <p className="event-date">Oct..... 2024</p>
                        </div>
                    </div>
                    <button className="learn-more-button">Learn More</button>
                </div>
                
            </div>
        </div>
    );
}

export default Event;
