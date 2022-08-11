import logo from './logo.svg';

import Pessoa from './Pessoa'
import Item from './Item'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Pessoa
        nome="Lucio"
        sobrenome="Freitas"
        profissao="Estagiario"
        
        />

        <Item marca="Gol"/>
        <Item marca="Lamborguini"/>

      </header>
    </div>
  )
}

export default App;
