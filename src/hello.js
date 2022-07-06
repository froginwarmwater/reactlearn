import ReactDOM from "react-dom/client";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const newName = "haha"
function tick() {
    const element = (
        <div>
            <Welcome name={newName}/>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}
function Welcome(props){
    return <h1>Hello, {props.name}!</h1>
}

setInterval(tick, 1000);
