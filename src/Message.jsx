import React, { useEffect, useState } from 'react';

const messages = [
    "Today is...",
    "as beautiful as other days",
    "but you realize",
    "another year has gone",
    "in a blink of the eyes",
    "however",
    "Do you know..?",
    "today is just special",
    "so special to you",
    "that's why",
    "Let's make it...",
    "the best celebration ever",
    "and let me share...",
    "a piece of happiness to you",
    "I made all this...",
    "as a birthday present to you",
    "thanks for being there",
    "thanks for the friendship we made",
    "thanks for everything",
    "I wish you all the best",
    "May your life be at ease",
    "May all your wishes come true",
    "Remember",
    "your ambitions",
    "you live as a free bird...",
    "flying in the blue sky",
    "Now things are different...",
    "real story of your life",
    "is just about to begin",
    "indeed..",
    "but...",
    "don't worry",
    "because...",
    "God has your back",
    "and",
    "this year will be better",
    "and I hope",
    "you'll find...",
    "happiness along the way",
    "keep your spirit up",
    "enjoy every single moment...",
    "that you experience today",
    "fill it with your most beautiful smile",
    "and make it the best memory..",
    "lastly...",
    "I'd like to wish you one more time",
    "a very happy birthday prasanna"
];

const Message = ({ show, onComplete }) => {
    const [currentLine, setCurrentLine] = useState(-1);

    useEffect(() => {
        if (show) {
            let i = 0;
            setCurrentLine(0);

            const interval = setInterval(() => {
                i++;
                if (i < messages.length) {
                    setCurrentLine(i);
                } else {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                }
            }, 3000); // 3 seconds per line (fadeIn + read + fadeOut) adjustment

            return () => clearInterval(interval);
        }
    }, [show, onComplete]);

    if (!show) return null;

    return (
        <div className="row message" style={{ display: 'block' }}>
            <div className="col-12">
                {messages.map((msg, index) => (
                    <p
                        key={index}
                        style={{
                            display: index === currentLine ? 'block' : 'none',
                            animation: index === currentLine ? 'fadeInOut 3s forwards' : 'none'
                        }}
                    >
                        {msg}
                    </p>
                ))}
                <style>{`
          @keyframes fadeInOut {
            0% { opacity: 0; display: block; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; display: none; }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Message;
