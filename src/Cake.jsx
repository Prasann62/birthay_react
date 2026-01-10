import React from 'react';

const Cake = ({ visible, candleLit }) => {
    return (
        <div className="row cake-cover">
            <div className="col-12 text-center">
                <div className="cake" style={{ display: visible ? 'block' : 'none' }}>
                    <div className="velas">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="fuego" style={{ display: candleLit ? 'block' : 'none' }}></div>
                        ))}
                    </div>
                    <div className="cobertura"></div>
                    <div className="bizcocho"></div>
                </div>
            </div>
        </div>
    );
};

export default Cake;
