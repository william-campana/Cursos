import React from 'react';

interface Props {
    name: string;
}

const SecoundComponent =  (props: Props) => {
  return (
    <div>
        <p>Meu Segundo Componente</p>
        <p>O nome dele é: {props.name}</p>
      
    </div>
  );
}

export default SecoundComponent
