import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    padding: 1rem;
    width: 100%;

    display: flex;
    align-items: center;
    /* justify-content: center; */

    cursor: pointer;

    a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: var(--blue-dark);
        transition: color 0.2s;

        div:hover {
            color: ${shade(0.2, '#33A6F2')}
        }
    }
    
`;

