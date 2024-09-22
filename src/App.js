// App.js
import React from 'react';
import Footer from './footer';
import Event from './events';   
import Gallery from './Gallery';

function App() {
    return (
        <div className="App">
            <Event/>
            <Gallery/>
            <Footer />
        </div>
    );
}

export default App;
