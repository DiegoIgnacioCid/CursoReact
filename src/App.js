import './App.css';
import CartContext from './Components/GlobalStateContext/CartContext';
import Rutas from './Rutas/Rutas';


function App() {
  return (
    <>
    <div className="App">
      <CartContext>
        <Rutas/>
      </CartContext>
    </div>
    
    </>
  );
}

export default App;
