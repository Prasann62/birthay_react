import React, { useEffect, useState } from 'react';

const Balloons = ({ flying, formingMessage }) => {
    const showLetters = true; // Set to false if you don't want letters
    const letters = "ilakkiya".split('');
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

    const [animatingBalloons, setAnimatingBalloons] = useState({});
    const [audio] = useState(() => new Audio('/son.webm'));

    const handleBalloonClick = (index, e) => {
        // Play audio
        audio.currentTime = 0;
        audio.play().catch(e => console.error("Error playing audio:", e));

        // Calculate direction
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        let animationClass = 'bounce-animate'; // Default UP (Top click)

        if (Math.abs(x) > Math.abs(y)) {
            // Horizontal
            // Clicked Right (x > 0) -> Bounce Left
            // Clicked Left (x < 0) -> Bounce Right
            animationClass = x > 0 ? 'bounce-left' : 'bounce-right';
        } else {
            // Vertical
            // Clicked Bottom (y > 0) -> Bounce Up (bounce-animate)
            // Clicked Top (y < 0) -> Bounce Down
            animationClass = y > 0 ? 'bounce-animate' : 'bounce-down';
        }

        // Trigger animation
        setAnimatingBalloons(prev => ({ ...prev, [index]: animationClass }));

        // Remove animation class after it finishes (2s)
        setTimeout(() => {
            setAnimatingBalloons(prev => {
                const newState = { ...prev };
                delete newState[index];
                return newState;
            });
        }, 2000);
    };

    return (
        <>
            {letters.map((char, index) => (
                <div
                    key={index}
                    id={`b${index + 1}`}
                    className={`balloons ${animatingBalloons[index] || ''}`}
                    onClick={(e) => handleBalloonClick(index, e)}
                    style={{
                        cursor: 'pointer',
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
