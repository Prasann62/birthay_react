import React from 'react';

const Banner = ({ visible }) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <img
                    src="banner6.png"
                    className={`bannar ${visible ? 'bannar-come' : ''}`}
                    alt="Happy Birthday Banner"
                    style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default Banner;
