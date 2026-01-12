import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ play }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (play && audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
    }, [play]);

    return (
        <audio className="song" controls loop style={{ display: 'none' }} ref={audioRef}>
            <source src="hbd.mp3" type="audio/mpeg" />
            Your browser isn't invited for super fun audio time.
        </audio>
    );
};

export default AudioPlayer;
