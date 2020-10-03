import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
    padding: 2rem;
    width: 100vw;
    height: 100vh;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    a {
        text-decoration: none;
    }

    @media (min-width: 750px) {
        max-width: 1050px;
    }

    @media (min-height: 750px) {
        justify-content: center;

    }

`;
export const HeaderInfo = styled.div`
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 2rem;
    }

    p {
        padding: 2rem;
        border: 2px solid var(--white);
        border-radius: 16px;
        box-shadow: 0 0 0.5rem;
        color: var(--blue-medium);
        font-size: 1.6rem;
    }
`;
export const BodyInfo = styled.div`
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 2rem;
    }

    p {
        padding: 2rem;
        border: 2px solid var(--white);
        border-radius: 16px;
        box-shadow: 0 0 0.5rem;
        color: var(--blue-medium);
        font-size: 1.6rem;
    }
`;

export const FooterInfo = styled.div`
    margin-bottom: 32px;
    
    h1 {
        margin: 1rem;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 2rem;
    }

    p {
        padding: 2rem;
        border: 2px solid var(--white);
        border-radius: 16px;
        box-shadow: 0 0 0.5rem;
        color: var(--blue-medium);
        font-size: 1.6rem;
    }

    strong {
        color: var(--blue-dark);
        
    }
`;

export const RulesButton = styled(Button)`
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: center; 

`;
