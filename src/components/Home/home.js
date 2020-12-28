import React from 'react';
import './home.css'
export const HomeComponent =(props)=>{
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
                           <div className="banner-btn-wrapper">
                                <label className="btn-banner-sm">
                                    <input type="radio" value="all" name="banner-btn-input" onChange={(e)=>props.HandaleBannerBtnVal(e)} checked={props.bannerBtnVal=="all"?true:false}/>
                                   <span>  
                                       All
                                   </span>
                                </label>
                                <label className="btn-banner-sm">
                                <input type="radio" value="doctor" name="banner-btn-input" onChange={(e)=>props.HandaleBannerBtnVal(e)} checked={props.bannerBtnVal=="doctor"?true:false}/>
                                  <span> 
                                       Doctor 
                                  </span>
                                </label>
                                <label className="btn-banner-sm">
                                <input type="radio" value="clinic" name="banner-btn-input" onChange={(e)=>props.HandaleBannerBtnVal(e)} checked={props.bannerBtnVal=="clinic"?true:false}/>
                                    <span>
                                        Clinic
                                    </span>
                                </label>
                           </div>
                        </div>
                    </div>
                    {/* home-page-banner-content end */}
                </div>
                {/* home-page-banner-div  */}
                <div className="home-page-sec-2">
                       <div className="s-container"> 
                            <h2 className="home-title-h1">
                                    DISCOVER THE <strong> ONLINE </strong> APPOINTMENT!
                            </h2> 
                            <h3 className="home-title-h2">
                                Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel.
                            </h3>

                            <div className="home-sec-2-card-container">
                                <div className="home-sec-2-card">
                                        <img src={require('../../assets/img/home-page/icon-home-1.svg').default} class="icon"/>
                                        <h2 className="card-title">FIND A DOCTOR</h2>
                                        <p className="card-p">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                                </div>
                                {/* home-sec-2-card end*/}
                                <div className="home-sec-2-card">
                                        <img src={require('../../assets/img/home-page/icon-home-2.svg').default} class="icon"/>
                                        <h2 className="card-title">VIEW PROFILE</h2>
                                        <p className="card-p">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                                </div>
                                {/* home-sec-2-card end*/}
                                <div className="home-sec-2-card">
                                        <img src={require('../../assets/img/home-page/icon-home-3.svg').default} class="icon"/>
                                        <h2 className="card-title">BOOK A VISIT</h2>
                                        <p className="card-p">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
                                </div>
                                {/* home-sec-2-card end*/}
                            </div>    
                            {/* home-sec-2-card-container end */}
                           <div className="find-dr-btn-wrapper">
                                <a className="find-dr-btn">
                                            Find Doctor
                                </a>
                                {/* find-dr-btn end */}
                           </div>
                       </div>  
                       {/* s-container end */}
                </div>
                {/* home-page-sec-2 */}
            </div>
            {/* home page end */}
        </React.Fragment>
    );
} 