import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface ButtonProps {
  title: string;
  route: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
      <Link to={props.route} className="button">
        {props.title}
      </Link>
    
  )
}

export default Button;