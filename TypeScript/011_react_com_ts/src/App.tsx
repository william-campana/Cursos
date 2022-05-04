import React, {createContext} from 'react';

// importação de componente
import FirstComponent from './components/FirstComponent';

// desestruturando props
import SecoundComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// state hook
import State from './components/State';
import Context from './components/Context';

// types
type textOrNull = string | null;
type textFixed = "1" | "2" | "3";

// context
interface IAppContext {
  language: string,
  framework: string,
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

// context
const contextValue = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
};

function App() {
  // variaveis 
  const name: string = "William";
  const job: string = "Programador";
  const isWorking: boolean = true;

  // funções
  const userGreeting = (name: string): string => {
    return `Ola ${name}`;
  }

  const myText:textOrNull = "Tem algum texto aqui";
  let mySecoundText: textOrNull = null;

  const myTextFixed: textFixed = "3";  // aceita somente os valores fixados no type

  return (
    <AppContext.Provider value={contextValue}>

      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Função: {job}</p>
        {isWorking && (
          <p>Esta Trabalhando</p>
        )}

        <h3>Chamando minha função:  {userGreeting(name)}</h3>
        
        
        <FirstComponent />
        <SecoundComponent name="Segundo" />
        <Destructuring 
          title="Primeiro Post" 
          content="Algum Conteudo" 
          comentsQty={10} 
          tags={["ts", "java", "python"]} 
          category={Category.TS}
        />

        <Destructuring 
          title="Segundo Post" 
          content="Algum Conteudo" 
          comentsQty={10} 
          tags={["ts", "java", "python"]} 
          category={Category.P}
          
        />      

        <State />

        {myText && <p>Tem texto na variável myText</p>}

        {mySecoundText && <p>Tem texto na variável mySecoundText</p>}

        <Context />
      </div>
    </AppContext.Provider>

  );
}

export default App;
