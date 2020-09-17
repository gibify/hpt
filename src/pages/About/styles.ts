import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
  
`;

export const Info = styled.div`
    padding: 1.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        color: var(--blue-medium);
    }

`;
export const Background = styled.div`
    padding: 1.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    
    
    img {
    width: min(70vw, max(350px));
    height: min(70vh, max(350px));
    }
`;