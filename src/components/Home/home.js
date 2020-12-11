import React from 'react';
import './home.css'
export const HomeComponent =()=>{
    return(
        <React.Fragment>
             {/* home page */}
             <div className="home-page">
                <div className="home-page-banner-div">
                    {/* <img className="banner-bg" src={require('../../assets/img/home-page/hero_home_bg.svg').default} /> */}
                    {/* bg image end */}
                    <div className="home-page-banner-content" style={{
                        backgroundImage:`url(${require('../../assets/img/home-page/hero_home_bg.svg').default})`
                    }}>
                        <div className="banner-content-container">
                            <h1 className="banner-h1">Searching for ITI.. ?</h1>
                            <p className="banner-p">Ask. Answer. Discover</p>
                            <div className="search-label">
                                <input type="text" placeholder="Ex. Name, Specialization ...." />
                                <button className="search-btn">Search</button>
                            </div>
                        </div>
                    </div>
                    {/* home-page-banner-content end */}
                </div>
                {/* home-page-banner-div  */}
            </div>
            {/* home page end */}
        </React.Fragment>
    );
} 