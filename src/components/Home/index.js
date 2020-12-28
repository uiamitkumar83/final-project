import React from 'react';
import {HomeComponent} from './home';
export default class HomeContainer extends React.Component{
        constructor(){
            super();
            this.state={
                bannerBtnVal:'all'
            }
        }
    HandaleBannerBtnVal = (e) =>{
            let val = e.target.value;
            this.setState({
                bannerBtnVal:val
            })
    }
    render(){
        return(
                <HomeComponent HandaleBannerBtnVal={this.HandaleBannerBtnVal} bannerBtnVal={this.state.bannerBtnVal} {...this.props}/>
        );
    }
} 