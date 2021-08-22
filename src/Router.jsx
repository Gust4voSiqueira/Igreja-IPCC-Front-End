import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import Landing from './Pages/Landing/Landing'
import AboutPage from './Pages/About/About';
import Location from './Pages/Location/Location';
import Events from './Pages/Events/Events'
import ECD from './Pages/ECD/ECD'

export default function Routes() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/Location" component={Location} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/ECD" component={ECD} />
      </BrowserRouter>
  
    );
  }


