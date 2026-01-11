import React from 'react';

const Banner = ({ visible }) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1
                    className={`bannar banner-text ${visible ? 'bannar-come' : ''}`}
                >
                    {/* H (Yellow: 1s) */}
                    <span className="blink-yellow">H</span>
                    {/* A (Red: 1.2s) */}
                    <span className="blink-red">A</span>
                    {/* P (Blue: 1.4s) */}
                    <span className="blink-blue">P</span>
                    {/* P (Green: 1.8s) */}
                    <span className="blink-green">P</span>
                    {/* Y (Pink: 2s) */}
                    <span className="blink-pink">Y</span>
                    &nbsp;
                    {/* B (Orange: 2.2s) */}
                    <span className="blink-orange">B</span>
                    {/* I (Yellow) */}
                    <span className="blink-yellow">I</span>
                    {/* R (Red) */}
                    <span className="blink-red">R</span>
                    {/* T (Blue) */}
                    <span className="blink-blue">T</span>
                    {/* H (Green) */}
                    <span className="blink-green">H</span>
                    {/* D (Pink) */}
                    <span className="blink-pink">D</span>
                    {/* A (Orange) */}
                    <span className="blink-orange">A</span>
                    {/* Y (Yellow) */}
                    <span className="blink-yellow">Y</span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
