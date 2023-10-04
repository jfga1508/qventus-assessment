import React from 'react';
import Login from './components/login/Login';
import './App.scss';

const passwordReqs = {
    specialCharacters: true,
    digits: true,
    uppercase: true,
    noConsecutive: true,
};

function App() {
    return (
        <div className='App'>
            <Login {...passwordReqs} />
        </div>
    );
}

export default App;
