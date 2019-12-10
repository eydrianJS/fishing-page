import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './navigation/MainPage';

export default function App(): JSX.Element {
    return (
        <div>
            <MainPage />
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root);