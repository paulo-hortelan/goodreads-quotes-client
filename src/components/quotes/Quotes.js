import styled from "styled-components";
import { string, func } from "prop-types";
import { Button } from "../button/Button";

export const Quotes = ({ quote, author, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Author>- {author}</Author>
            <Button onClick={onUpdate}>Nova frase</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    author: string,
    onUpdate: func,
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
`;

const Quote = styled.p`
    font-size: 2rem;
    margin: 0;
`;

const Author = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;
