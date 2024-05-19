import React from 'react';
import TranslateText from './components/TranslateText';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1>Language App</h1>
            <TranslateText className="component" />
        </div>
    );
};

export default App;
