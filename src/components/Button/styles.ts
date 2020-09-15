import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    text-decoration: none;
    background: var(--blue-dark);
    width: 180px;
    height: 36px;
    margin-top: 8px;
    padding: 8px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 16px;
    color: var(--white);
    transition: background-color 0.2s;
    
    &:hover {
        background: ${shade(0.2, '#33A6F2')};
    }
`;