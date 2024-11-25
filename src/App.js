import Container from './component/Container.js';
import DisplayNum from './component/DisplaNum.js';
import Buttons from './component/Buttons.js';
import ButtonBorder from './component/ButtonBorder.js';

import './App.css';

const btnVal =[
  ["C","DEL","?","/"],
  [1,2,3,"X"],
  [4,5,6,"-"],
  [7,8,9,"+"],
  [0,"="],  
]

const operatorList = ["+", "-", "X", "/", "="];


function App() {
  return (

    <Container>
      <DisplayNum  />
      <ButtonBorder>
        {btnVal.flat().map((btn, index) => (
          <button
            key={index}
            className={`button ${operatorList.includes(btn) ? "operator" : "button"} ${btn === 0 || btn === "=" ? "span-two" : "button"}`}
          >
            {btn}
          </button>
        ))}

        
      </ButtonBorder>
    </Container>

  );
}

export default App;
