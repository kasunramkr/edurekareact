import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BodyComponent from './componets/bodycomponent/BodyComponent.jsx';
import * as serviceWorker from './serviceWorker';
import HeaderComponent from "./componets/headercomponent/HeaderComponent";

ReactDOM.render(
    <React.StrictMode>
        <HeaderComponent/>
        <BodyComponent/>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
