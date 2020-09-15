import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const Header = styled.div`
    text-align: right;
    a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: var(--blue-dark);
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#33A6F2')}
        }
    }
`;

export const Title = styled.div`

`;
export const Content = styled.div `
    padding: 1rem;
    max-width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 700px) {
        display: flex;
        flex-direction: row; 
    }
`;
export const Info = styled.div `
    padding: 1.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin: 3.2rem auto 1.6rem auto;
        color: var(--blue-medium);
        font-weight: 600;
    }
    
    h1 {
        text-align: center;
        margin: 0px auto 32px auto;
        color: var(--blue-dark);
        font-weight: 600;
        width: min(70vw, 350px);

        @media (min-width: 700px) {
            margin: 0 auto 32px auto; 
        }
    }

`;

export const Background = styled.div `
padding: 1.6rem;
margin: 16px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;



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

    margin-top: 48px;
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
