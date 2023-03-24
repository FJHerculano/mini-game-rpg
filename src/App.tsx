import * as C from './App.styles'
import { useEffect, useState } from 'react'
import Character from './components/Character'
import useCharacter from './hooks/useCharacter'

function App() {

  const char = useCharacter('José');
  const char2 = useCharacter('Pedrinho');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <div className="App">
      <C.Container>
        <C.Map>
          <Character
            x={char.x} 
            y={char.y}
            side={char.side}
            name={char.name}
          />
          <Character
            x={char2.x} 
            y={char2.y}
            side={char2.side}
            name={char2.name}
          />
        </C.Map>
        <button onClick={()=>char2.moveLeft()}>Esquerda</button>
        <button onClick={()=>char2.moveRight()}>Direita</button>
        <button onClick={()=>char2.moveUp()}>Pra cima</button>
        <button onClick={()=>char2.moveDown()}>Pra baixo</button>
      </C.Container>
    </div>
  )
}

export default App
