import React from 'react';

const Banner = ({ visible }) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <img
                    src="/banner.png"
                    className={`bannar ${visible ? 'bannar-come' : ''}`}
                    alt="Happy Birthday Banner"
                />
            </div>
        </div>
    );
};

export default Banner;
