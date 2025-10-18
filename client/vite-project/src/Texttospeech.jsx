import React, { useState } from 'react'
import "./Texttospeech.css"

const Texttospeech = () => {
    const [text, setText] = useState("")

    const handleSpeak = () => {
        if (!text.trim()) return
        const utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance)
    }

    return (
        <div className="tts-container">
            <h1 className="tts-title">Text to Speech</h1>
            <textarea
                className="tts-textarea"
                placeholder="Type your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="tts-button" onClick={handleSpeak}>Speak</button>
            {text && (
                <p className="tts-preview">You typed: {text}</p>
            )}
        </div>
    )
}

export default Texttospeech
