import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Global styles

import Loading from './Loading';
import AudioPlayer from './AudioPlayer';
import Lights from './Lights';
import Banner from './Banner';
import Balloons from './Balloons';
import Cake from './Cake';
import Message from './Message';
import Controls from './Controls';

function App() {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState('start'); // start, lights_on, music_playing, decorating, balloons_flying, cake_visible, candles_lit, message_shown, storytelling

  const [isCandleBlown, setIsCandleBlown] = useState(false);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Events based on stage for visual side-effects
  const commonActiveStages = ['music_playing', 'decorating', 'balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'];

  const lightsOn = stage !== 'start' && stage !== 'moon_clicked';
  const musicPlaying = commonActiveStages.includes(stage);
  const bannerVisible = ['decorating', 'balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const balloonsFlying = ['balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const cakeVisible = ['cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const candlesLit = ['candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage) && !isCandleBlown;
  const formingMessage = ['message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const showStory = stage === 'storytelling';

  // Handle specific transition logic if needed (like auto-advancing story)
  useEffect(() => {
    if (stage === 'message_shown') {
      // Logic for balloons forming text is in Balloons component based on 'formingMessage' prop
      // Automatically transition to story button or wait?
      // Original script: user clicks "Happy Birthday" (wish_message) -> balloons form -> "A message for you" button appears.
      // Controls component handles the button click to next stage.
      // But wait, in Controls I hid the 'A message for you' button initially.
      // Let's reveal it or auto-start story properly.
      // Actually, after balloons form, the "Story" button appeared in original.
      // I'll update Controls.jsx to show "A message for you" button when stage is 'message_shown'.
    }
  }, [stage]);

  if (loading) return <Loading />;

  return (
    <div className="App">
      {stage === 'start' && (
        <>
          <div className="moon-text">
            It's your birthday moon
            <br />
            <span className="pink-text">Click it</span>
          </div>
          <img
            src="moon.png"
            className="moon"
            alt="moon"
            onClick={() => setStage('moon_clicked')}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
      <AudioPlayer play={musicPlaying} />

      <Lights on={lightsOn} afterMusic={musicPlaying} />

      <Banner visible={bannerVisible} />

      <Balloons flying={balloonsFlying} formingMessage={formingMessage} />

      {/* Cake is special: it hides during story */}
      {!showStory && <Cake visible={cakeVisible} candleLit={candlesLit} />}

      <Message show={showStory} onComplete={() => setStage('finished')} />

      <Controls
        stage={stage}
        onBlowCandle={() => setIsCandleBlown(true)}
        isCandleBlown={isCandleBlown}
        setStage={setStage}
      />

      {['candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage) && (
        <img
          src="angel.png"
          className={['storytelling', 'finished'].includes(stage) ? 'angel angel-centered' : 'angel'}
          alt="Angel"
        />
      )}

    </div>
  );
}

export default App;
