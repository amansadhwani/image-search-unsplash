import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Switch, Route } from "react-router-dom"
import ImageId from './components/ImageId'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Switch>
        <Route strict exact path={'/'} component={App}/>
        <Route strict exact path={'/:id'} component={ImageId}/>
     </Switch>
     
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();