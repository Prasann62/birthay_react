import React, { useEffect, useState } from 'react';

const messages = [
    "Today’s your day",
     "no need to say it loud,",
    "A quiet wish hidden in the crowd.",
    "Like a secret that the heart can’t tell,",
    "Just know, this day is yours—enjoy it well.",
    "இது உன் நாள், இதைக் கொண்டாடு...", // Tamil line: This is your day, celebrate it...
    "Happy birthday ilakkiya"
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
            }, 3000);

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
