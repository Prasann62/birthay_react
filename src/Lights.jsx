import React from 'react';

const Lights = ({ on, afterMusic }) => {
    const bulbColors = ['yellow', 'red', 'blue', 'green', 'pink', 'orange'];

    return (
        <div className="container" style={{ display: 'block', opacity: 1 }}> {/* container padding setup in CSS */}
            <div className="row">
                {bulbColors.map((color) => {
                    let className = "bulb";
                    if (on) className += ` bulb-glow-${color}`;
                    if (afterMusic) className += ` bulb-glow-${color}-after`;

                    return (
                        <div key={color} className="col-md-2 col-2 bulb-holder">
                            <div className={className} id={`bulb_${color}`}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Lights;
