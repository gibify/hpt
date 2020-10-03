import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
    padding: 2rem;
    width: 100vw;
    height: 100vh;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 750px) {
        flex-direction: row;
        max-width: 1050px;
        height: 100%;
    }
`;

export const Form = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    fieldset {
        border: 0;
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        legend {
            font-size: 2rem;
            font-weight: 600;
            text-align: center;
            color: var(--blue-dark);
            margin: 2rem auto;

            @media (min-width: 750px) {
                font-size: 2.3rem;
            }
        }

        label {
            margin: 2rem 0 1rem 0;
            font-weight: 600;
            color: var(--blue-dark);
            
        }

        input {
            width: 100%;
            padding: 1rem;
            border: 0;
            box-shadow: 0 0 0.5rem #333;
            
            &::placeholder {
                font-size: 14px;
                color: #e5e5e5;
            }
            
        }
    }
`;
 
export const RegisterButton = styled(Button)`
    margin: 3rem;

    display: flex;
    align-items: center;
    justify-content: center; 


`;

export const BackgroundImage = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 750px) {
        background: var(--white);
    }

    img {
        width: min(70vw, max(260px));
        height: min(70vh, max(260px));

        @media (min-width: 700px) {
            width: min(40vw, max(512px));
            height: min(40vh, max(512px));
        }
    }
`;
