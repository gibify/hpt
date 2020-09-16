import styled from 'styled-components';


export const Container = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
   
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 700px) {
        width: min(40vw, max(512px));
        height: min(40vh, max(512px));
    }
`;

export const Content = styled.div `
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
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
        margin: 16px;
        color: var(--blue-medium);
        font-weight: 600;
    }
    
    h1 {
        text-align: center;
        margin: 16px;
        color: var(--blue-dark);
        font-weight: 600;
        font-size: 48px;
        width: min(70vw, 350px);

        @media (min-width: 700px) {
            font-size: 56px;
        }
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
