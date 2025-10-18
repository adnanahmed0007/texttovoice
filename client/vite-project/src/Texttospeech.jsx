import React, { useState } from 'react';
import "./Texttospeech.css";
import axios from 'axios';
const TextToSpeech = () => {
    const [text, setText] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchAnswer = async () => {
        if (!text.trim()) return;
        setLoading(true);
        setAnswer("");

        try {
            /*const response = await axios.post("http://localhost:9923/authentication/api/savedquestion", { UseraskedQuestion: text }, { withCredentials: true });
            console.log("Question saved response:", response.data);*/


            const searchRes = await fetch(
                `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
                    text
                )}&format=json&origin=*`
            );
            const searchData = await searchRes.json();

            if (!searchData.query?.search?.length) {
                throw new Error("No results found");
            }

            const title = searchData.query.search[0].title;


            const summaryRes = await fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
            );
            const summaryData = await summaryRes.json();

            const summary = summaryData.extract || "No summary available.";
            setAnswer(summary);

            // Step 3: Speak the answer
            const utterance = new SpeechSynthesisUtterance(summary);
            utterance.lang = "en-US";
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error("Error fetching data:", error);
            setAnswer("Sorry, I couldn't find an answer.");
            const utterance = new SpeechSynthesisUtterance("Sorry, I couldn't find an answer.");
            speechSynthesis.speak(utterance);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="tts-container">
            <h1 className="tts-title">Ask & Listen</h1>

            <textarea
                className="tts-textarea"
                placeholder="Ask a factual question (e.g., When did World War 1 happen?)"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button className="tts-button" onClick={fetchAnswer} disabled={loading}>
                {loading ? "Thinking..." : "Ask & Speak"}
            </button>

            {answer && (
                <div className="tts-answer">
                    <h3>Answer:</h3>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default TextToSpeech;

