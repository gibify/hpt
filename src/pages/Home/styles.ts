import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: row;
        max-width: 1050px; 
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: var(--blue-medium);
        font-weight: 600;
        text-align: center;

        @media (min-width: 750px) {
            font-size: 3rem;
        }
    }

    img {
        margin-top: 5rem;
        width: 100%;
    }

    
    @media (min-width: 750px) {
        width: min(40vw, max(512px));
        height: min(40vh, max(512px));
    }
`;

export const HomeButton = styled(Button)`
   display: flex;
   align-items: center;
   justify-content: center; 
 `;

export const Info = styled.div `
    padding: 1.6rem;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    a {
        text-decoration: none;
    }
`;

export const Background = styled.div `
    padding: 1.6rem;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Image = styled.div`
    img {
    width: min(70vw, max(250px));
    height: min(70vh, max(250px));

    @media (min-width: 700px) {
        width: min(40vw, max(512px));
        height: min(40vh, max(512px));
        
    }
}
`;
export const Links = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;

    
a {
    text-decoration: none;
    cursor: pointer;
    
    & + a {
        margin-left: 16px;
    }

}
    > & + a {
        margin-left: 16px;
    }
 
 img {
    width: 25px;
    height: 25px;
 }


`;
