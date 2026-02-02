import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // 1 Importar useState
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  // 2. Crear el estado global del contador
  const [totalQuantity, setTotalQuantity] = useState(0);

  // 3: Función para sumar products
  const handleOnAdd = (quantity) => {
    setTotalQuantity(prev => prev + quantity);
  };

  return (
    <BrowserRouter>
      {/* 4 Pasar el número al NavBar */}
      <NavBar cartCount={totalQuantity} />
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
        
        {/* 5: Pasar la función handleOnAdd al detalle */}
        <Route 
          path="/item/:itemId" 
          element={<ItemDetailContainer onAddGlobal={handleOnAdd} />} 
        />
        
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;