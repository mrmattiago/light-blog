import React from 'react';

export interface Props {
    title: string;
};

const Button: React.FC<Props> = (props) => {
    return (<button>{props.title}</button>);
};

export default Button;
