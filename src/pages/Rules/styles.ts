import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    padding: 2rem;
    width: 100vw;
    height: 100vh;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 700px) {
        justify-content: space-evenly;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 700px) {
        max-width: 1050px;
    }

`;
export const HeaderInfo = styled.div`
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 1rem;
        color: var(--blue-medium);
        font-size: 16px;
    }
`;
export const BodyInfo = styled.div`
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 1rem;
        color: var(--blue-medium);
        font-size: 16px;
    }
`;

export const FooterInfo = styled.div`
    margin-bottom: 32px;
    
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 1rem;
        color: var(--blue-medium);
        font-size: 16px;
    }

    strong {
        color: var(--blue-dark);
        
    }
`;

export const FooterButton = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    @media (min-width: 700px) {
        justify-content: right;
    }

    div {
        text-align: center;
        background: var(--blue-dark);
        width: min(80vw, max(280px));
        padding: 1rem;
        margin: 1.8rem;
        border-radius: 16px;
        transition: background-color 0.2s;

        cursor: pointer;

        &:hover {
            background: ${shade(0.2, '#33A6F2')};
        }
    }
    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: var(--white);
    }
`;