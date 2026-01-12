import React from 'react';

const Controls = ({ stage, setStage, onBlowCandle, isCandleBlown }) => {
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
                    {stage === 'moon_clicked' && (
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
                        <>
                            {!isCandleBlown && (
                                <button className="btn btn-primary" onClick={() => {
                                    onBlowCandle();
                                    setStage('ready_for_story');
                                }}>Blow Candle</button>
                            )}
                            {isCandleBlown && (
                                <button className="btn btn-primary" onClick={() => setStage('ready_for_story')}>A message for you</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Controls;
