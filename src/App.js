import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar2 from './Components/NavBar/NavBar2';

function App() {
  return (
    <>
    <div className="App">

    <NavBar2/>
    <br/>
    <div>
      <ItemListContainer/>

    </div>
    <div>
      <ItemDetailContainer/>
    </div>
    </div>
    
    </>
  );
}

export default App;
