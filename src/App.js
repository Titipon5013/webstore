import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

const App = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default App;
