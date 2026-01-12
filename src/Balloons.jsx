import React, { useEffect, useState } from 'react';

const Balloons = ({ flying, formingMessage }) => {
    const showLetters = true; // Set to false if you don't want letters
    const letters = "12345678".split('');
    const [positions, setPositions] = useState([]);

    // Random float effect
    useEffect(() => {
        if (flying && !formingMessage) {
            const interval = setInterval(() => {
                setPositions(letters.map(() => ({
                    left: Math.random() * 80 + 'vw', // 0-80vw to keep on screen
                    bottom: Math.random() * 50 + 'vh',
                    transition: 'all 5s linear' // smooth random movement
                })));
            }, 5000); // Change position every 5s
            return () => clearInterval(interval);
        }
    }, [flying, formingMessage]);

    // Formation Effect
    useEffect(() => {
        if (formingMessage) {
            // Calculate centered positions
            const vw = window.innerWidth;
            const center = vw / 2;
            const spacing = Math.min(vw * 0.12, 100);

            const newPositions = letters.map((_, index) => {
                const offsetIndex = index - Math.floor(letters.length / 2);
                return {
                    left: (center + (offsetIndex * spacing)) + 'px',
                    top: '240px', // Fixed from top as per original script
                    bottom: 'auto',
                    transition: 'all 2s ease'
                };
            });
            setPositions(newPositions);
        }
    }, [formingMessage]);

    return (
        <>
            {letters.map((char, index) => (
                <div
                    key={index}
                    id={`b${index + 1}`}
                    className="balloons"
                    style={{
                        opacity: flying ? 1 : 0,
                        bottom: flying && !formingMessage ? (positions[index]?.bottom || '-500px') : 'auto',
                        top: formingMessage ? (positions[index]?.top || 'auto') : 'auto', // CSS handles default off-screen
                        left: positions[index]?.left || (index * 10 + 'vw'),
                        transition: positions[index]?.transition || 'bottom 8s', // Initial fly up duration
                        background: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        backdropFilter: 'none',
                        width: '120px',
                        height: '140px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <img
                        src="balloon.svg"
                        alt="balloon"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            zIndex: -1,
                            filter: `hue-rotate(${index * 45}deg)` // Different color for each balloon
                        }}
                    />
                    <h2 style={{
                        display: (formingMessage && showLetters) ? 'block' : 'none',
                        position: 'relative',
                        // top: '30%', // Removed manual offset
                        marginTop: '-20px', // Slight optical adjustment for balloon shape (wider at top)
                        color: 'white',
                        textShadow: '0 0 5px rgba(0,0,0,0.5)',
                        fontSize: '3rem',
                        margin: 0,
                        paddingBottom: '20px' // Optical center
                    }}>
                        {char}
                    </h2>
                </div>
            ))}
            <img src="Balloon-Border.png" width="100%" className="balloon-border" style={{ top: flying ? '-500px' : '100%', transition: 'top 8s' }} />
        </>
    );
};

export default Balloons;
