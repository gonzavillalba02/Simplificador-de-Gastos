import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [ligth, setLigth] = useState(false);

  const handleLigth = () => {
    setLigth(!ligth);
  }

  return (
    <div className={"App " + (ligth && "App-li")}>
      <Header ligth={ligth} handleLigth={handleLigth}/>
      <Main ligth={ligth}/>
      <Footer ligth={ligth}/>
    </div>
  );
}

export default App;
