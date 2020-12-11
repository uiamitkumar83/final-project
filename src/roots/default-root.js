import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {SinglePageLayout} from '../layouts/single-page-layout'
import {HomeComponent} from '../components/Home/home'
export const Root = (props) => {
    return ( 
        <Router>
            <Route exact path="/" render={(props)=>{return(<SinglePageLayout children={HomeComponent} {...props}/>)}}/> 
            {/* <Route exact path="/about" render={(props)=>{return(<About {...props}/>)}}/>  */}
        </Router> 
    );
}

