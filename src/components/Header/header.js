import React, { Component, Fragment } from 'react';
import './header.css';
export const Header = (props) => {
    return (
        <Fragment>
            <header className="main-header">
                <div class="s-container">
                    <div className="lg-header">
                        <div className="lg-logo">
                            <a>
                                <img src={require('../../assets/img/header-img/logo.png').default} />
                            </a>
                        </div>
                        {/*lg-logo end */}
                        <div className="lg-menu-link-wrapper">
                            <ul className="menu-list-wrapper">
                                <li className="menu-list">
                                    <a className="menu-link">Home</a>
                                    {/* anchor end */}
                                    <ul className="sub-menu-ul">
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                            {/*sub-menu-level1*/}
                                            <ul className="sub-menu-level1">
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                            </ul>
                                            {/*sub-menu-level1 end*/}
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-list">
                                    <a className="menu-link">Pages</a>
                                    <ul className="sub-menu-ul">
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-list">
                                    <a className="menu-link">Extra Elements</a>
                                </li>
                                <li className="menu-list right">
                                    <a className="menu-link">
                                        <img src={require('../../assets/img/header-img/user-profile.svg').default} className="profile-icon" />
                                    </a>
                                    <ul className="sub-menu-ul">
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list right">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                        </li>
                                        <li className="sub-menu-list">
                                            <a className="sub-menu-link">
                                                Sub-menu-link1
                                            </a>
                                            {/*sub-menu-level1*/}
                                            <ul className="sub-menu-level1">
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                                <li className="sub-menu-level1-list">
                                                    <a className="sub-menu-level1-link">level1 link</a>
                                                </li>
                                            </ul>
                                            {/*sub-menu-level1 end*/}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* lg-header end */}
                </div>
            </header>
        </Fragment>
    );
}


