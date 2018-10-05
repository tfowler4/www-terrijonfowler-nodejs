import React, { Component } from "react";
import ReactDOM from "react-dom";
import Resume from './Resume';
import styles from '../css/style.css';

(function() {
    $(document).ready(function() {
        console.log('ready');
        class Page extends React.Component {
            constructor() {
                super();
            }
            
            render() {
                return (
                    <div id="root-container" className="container-fluid">
                        <Header />
                        <Content />
                    </div>
                )
            }
        }

        class Header extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <nav id="header" className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume">Resume</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <a className="navbar-brand" href="#"></a>
                    </nav>
                );
            }
        }

        class Content extends React.Component {
            constructor() {
                super();
            }

            render() {
                const homeStyle = {
                    'backgroundColor':'red',
                    'fontSize':'200px'
                };

                const resumeStyle = {
                    'backgroundColor':'green',
                    'fontSize':'200px'
                };

                const portfolioStyle = {
                    'backgroundColor':'yellow',
                    'fontSize':'200px'
                };

                const contactStyle = {
                    'backgroundColor':'orange',
                    'fontSize':'200px'
                };

                return (
                    <div>
                        <div className="row">
                            <div className="content-pane col" style={homeStyle} id="home" name="home">
                                <div className="row">
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="row justify-content-center description">
                                    <div className="col-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non magna feugiat, vehicula metus ac, fermentum urna. Vivamus maximus metus in finibus facilisis. Mauris placerat semper orci vel pulvinar. Nulla luctus non ligula eu elementum. Donec id ligula ut odio volutpat auctor a quis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id feugiat massa. Integer ante mi, accumsan pretium viverra sed, sagittis in ante. Quisque iaculis imperdiet mi eu iaculis. Duis a efficitur elit, ut tempor erat. Pellentesque pellentesque efficitur urna, vitae vehicula ex euismod quis. Curabitur tempus libero a velit ornare ultrices et non neque. Curabitur iaculis eros sem, a sodales augue rhoncus eget. Donec pharetra massa ornare felis pharetra, vel venenatis purus ullamcorper.
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn-submenu btn btn-lg btn-outline-dark">One</button>
                                    <button className="btn-submenu btn btn-lg btn-outline-dark">Two</button>
                                    <button className="btn-submenu btn btn-lg btn-outline-dark">Three</button>
                                    <button className="btn-submenu btn btn-lg btn-outline-dark">Four</button>
                                    <button className="btn-submenu btn btn-lg btn-outline-dark">Five</button>
                                </div>
                                <div className="row">
                                <button className="btn-submenu btn btn-xl btn-outline-dark">Download Resume</button>
                                </div>
                            </div>
                        </div>
                        <Resume />
                        <div className="row">
                            <div className="content-pane col" style={portfolioStyle} id="portfolio" name="portfolio">
                                <i className="fa fa-lock"></i>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="content-pane col" style={contactStyle} id="contact" name="contact">
                                <i className="fa fa-car"></i>
                            </div>
                        </div>
                    </div>
                );
            }            
        }

        class Pane extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <div />
                );
            }            
        }

        class Footer extends React.Component {
            constructor() {
                super();
            }

            render() {
                return (
                    <div>
                        <a id="back-to-top" href="#" className="btn btn-primary btn" role="button" title="Return to Top" data-toggle="tooltip" data-placement="left">
                            <i class="fa fa-chevron-up"></i>
                        </a>    
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Page />,
            document.getElementById('root')
        );

        (function() {
            var windowHeight = $(window).height();
        
            $('.content-pane').css('height', windowHeight + 'px');
            
            var hash = window.location.hash;

            if (hash) {
                const element = $(hash);

                $('body,html').animate({
                    scrollTop: element.offset().top-56
                });                
            }
        })();
    });

    // scroll body to 0px on click
    $(document).on('click', '#back-to-top', function() {
        $('#back-to-top').tooltip();

        $('body,html').animate({
            scrollTop: 0
        }, 800);
        
        return false;
    });

    $(document).on('click', '.nav-link', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const tag     = $(this).attr('href');
        const element = $(tag);

        $('body,html').animate({
            scrollTop: element.offset().top-56
        }, 800);

        return false;
    });

    $(window).on('resize', function() {
        var windowHeight = $(window).height();
        
        $('.content-pane').css('height', windowHeight + 'px');
    });
})();