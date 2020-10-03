import styled from 'styled-components';


interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--blue-dark)')};
  color: ${(props) => (props.outlined ? 'var(--blue-dark)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '2px solid var(--blue-dark)' : 'none')};

  width: 180px;
  height: 36px;
  padding: 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => props.outlined 
      ? 'var(--light-hover)' 
      : 'var(--dark-hover)'
    };
  }

`;