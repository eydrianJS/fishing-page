import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './navigation/MainPage';

export default function App(): JSX.Element {
    const sum = (a: number, b: number): number => {
        return a + b;
    }
    return (
        <div>
            <MainPage />
            Hello!! {sum(14, 14)};
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root);