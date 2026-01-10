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

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Events based on stage for visual side-effects
  const commonActiveStages = ['music_playing', 'decorating', 'balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'];

  const lightsOn = stage !== 'start';
  const musicPlaying = commonActiveStages.includes(stage);
  const bannerVisible = ['decorating', 'balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const balloonsFlying = ['balloons_flying', 'cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const cakeVisible = ['cake_visible', 'candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
  const candlesLit = ['candles_lit', 'message_shown', 'ready_for_story', 'storytelling', 'finished'].includes(stage);
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
      <AudioPlayer play={musicPlaying} />

      <Lights on={lightsOn} afterMusic={musicPlaying} />

      <Banner visible={bannerVisible} />

      <Balloons flying={balloonsFlying} formingMessage={formingMessage} />

      {/* Cake is special: it hides during story */}
      {!showStory && <Cake visible={cakeVisible} candleLit={candlesLit} />}

      <Message show={showStory} onComplete={() => setStage('finished')} />

      <Controls
        stage={stage}
        setStage={(newStage) => {
          if (newStage === 'message_shown') {
            setStage('message_shown');
            setTimeout(() => setStage('ready_for_story'), 3000);
          } else {
            setStage(newStage);
          }
        }}
      />
    </div>
  );
}

export default App;
