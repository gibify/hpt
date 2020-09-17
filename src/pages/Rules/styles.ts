import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 700px) {
        justify-content: space-evenly;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    padding: 1.6rem;
    margin-bottom: 16px;
`;
export const HeaderInfo = styled.div`
    h1 {
        margin: 8px 8px;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 0.8rem;
        color: var(--blue-medium);
        font-size: 14px;
    }
`;
export const BodyInfo = styled.div`
    h1 {
        margin: 8px 8px;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 0.8rem;
        color: var(--blue-medium);
        font-size: 14px;
    }
`;

export const FooterInfo = styled.div`
    margin-bottom: 32px;
    
    h1 {
        margin: 8px 8px;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 21px;
    }

    p {
        padding: 0.8rem;
        color: var(--blue-medium);
        font-size: 14px;
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
        /* align-items: right; */
    }

    div {
        text-align: center;
        background: var(--blue-dark);
        width: min(80vw, max(280px));
        padding: 8px;
        margin: 16px;
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