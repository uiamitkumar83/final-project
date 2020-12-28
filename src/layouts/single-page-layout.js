import React, { Component, Fragment, useEffect } from 'react'
import {Header} from '../components/Header/header'
export const SinglePageLayout = (props) => {
    let HandleVarValueOnResizeWindow = () => {
        let w = document.documentElement.clientWidth;
        let myVar = "--defult-size";
        let layoutSize = 1366; 
        let defaultFontSize = 10;
        let percentOfScreen = (defaultFontSize * 100) / layoutSize;
        let currentVarValue = (w * percentOfScreen) / 100 + 'px'
        if (w > layoutSize) {
            document.documentElement.style.setProperty(myVar, currentVarValue);
        }
        else {
            document.documentElement.style.setProperty(myVar, defaultFontSize+'px');
        }
    }
    useEffect(()=>{
        window.addEventListener("resize", HandleVarValueOnResizeWindow);
        window.addEventListener("load", HandleVarValueOnResizeWindow);
    });
    return (
        <Fragment>
            <main className="main-wrapper">
            <Header></Header>   
               <props.children {...props}/>
            </main>     
        </Fragment>

    )
}