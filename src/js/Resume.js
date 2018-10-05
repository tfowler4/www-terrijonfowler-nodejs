import React from "react";

class Resume extends React.Component {
    constructor() {
        super();
    }

    render() {
        const resumeStyle = {
            'backgroundColor':'green',
            'fontSize':'200px'
        };

        return (
            <div className="row">
                <div className="content-pane col" style={resumeStyle} id="resume" name="resume">
                    <div className="row">
                        <i className="fa fa-book"></i>
                    </div>
                    <div className="row justify-content-center description">
                        <div className="col-8">
                            THIS IS THE RESUME
                        </div>
                    </div>
                </div>
            </div> 
        );
    }            
}

export default Resume;