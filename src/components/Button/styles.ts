import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: var(--blue-dark);
    width: 180px;
    height: 36px;
    text-align: center;
    margin-top: 8px;
    padding: 8px;
    border-radius: 16px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background: ${shade(0.2, '#33A6F2')};
    }

    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: var(--white);
    }
`;