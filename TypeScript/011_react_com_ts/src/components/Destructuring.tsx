import React from 'react';

interface Props {
    title: string;
    content: string;
    comentsQty: number;
    tags: string[];
    category: Category;
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python",

}

const Destructuring =  ({title, content, comentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de Comentários: {comentsQty}</p>
        <p>{tags.map(tag => (
            <span>#{tag}</span>
        ))}</p>
        <h4>Categoria: {category}</h4>
      
    </div>
  );
}

export default Destructuring
