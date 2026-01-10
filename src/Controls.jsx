import React from 'react';

const Controls = ({ stage, setStage }) => {
    const handleTurnOn = () => setStage('lights_on');
    const handlePlayMusic = () => setStage('music_playing');
    const handleDecorate = () => setStage('decorating');
    const handleBalloons = () => setStage('balloons_flying');
    const handleCake = () => setStage('cake_visible');
    const handleLightCandle = () => setStage('candles_lit');
    const handleMessage = () => setStage('message_shown');
    // const handleStory = () => setStage('story_end'); // Triggered auto or click

    return (
        <div className="navbar fixed-bottom">
            <div className="row w-100">
                <div className="col-md-8 offset-md-2 col-12 text-center">
                    {stage === 'start' && (
                        <button className="btn btn-primary" onClick={handleTurnOn}>Turn On Lights</button>
                    )}
                    {stage === 'lights_on' && (
                        <button className="btn btn-primary" onClick={handlePlayMusic}>Play Music</button>
                    )}
                    {stage === 'music_playing' && (
                        <button className="btn btn-primary" onClick={handleDecorate}>Let's Decorate</button>
                    )}
                    {stage === 'decorating' && (
                        <button className="btn btn-primary" onClick={handleBalloons}>Fly With Balloons</button>
                    )}
                    {stage === 'balloons_flying' && (
                        <button className="btn btn-primary" onClick={handleCake}>Most Delicious Cake Ever</button>
                    )}
                    {stage === 'cake_visible' && (
                        <button className="btn btn-primary" onClick={handleLightCandle}>Light Candle</button>
                    )}
                    {stage === 'candles_lit' && (
                        <button className="btn btn-primary" onClick={handleMessage}>Happy Birthday</button>
                    )}
                    {stage === 'ready_for_story' && (
                        <button className="btn btn-primary" onClick={() => setStage('storytelling')}>A message for you</button>
                    )}
                    {(stage === 'message_shown') && (
                        <button className="btn btn-primary" onClick={() => { }} style={{ display: 'none' }}>A message for you</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Controls;
