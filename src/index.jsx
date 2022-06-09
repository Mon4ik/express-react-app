import React from "react";
import { createRoot } from 'react-dom/client';

import Button from "./components/Button";

function App() {
    return (
        <div>
            <h1>Hello world!</h1>
            <p>This site running on <a href="https://reactjs.org" target="_blank">React</a>, <a href="https://webpack.js.org" target="_blank">Webpack</a> and <a href="https://expressjs.com" target="_blank">Express</a></p>
            <Button>Hello</Button>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);