import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Quotes } from "../../components/quotes/Quotes";
import { getQuote } from "../../services/quotesService/quotesService";
import pageFlip from "../../sounds/page-flip.mp3";

const audioButton = new Audio(pageFlip);

function App() {
    const [quoteState, setQuoteState] = useState({ quote: "loading quote...", author: "loading author..." });

    const onUpdate = async () => {
        const resQuote = await getQuote();

        setQuoteState(resQuote);
        audioButton.play();
    };

    const onCreate = async () => {
        const resQuote = await getQuote();
        setQuoteState(resQuote);
        audioButton.volume = 0.5;
    };

    useEffect(() => {
        onCreate();
    }, []);

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate} />
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default App;
