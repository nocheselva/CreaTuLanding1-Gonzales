import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; 

// 1. Se agrega onAddGlobal para recibir la función de App.jsx
const ItemDetailContainer = ({ onAddGlobal }) => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => setProduct(response))
            .catch(error => console.error(error));
    }, [itemId]);

    // 2. Crear una función interna para manejar el click de agregar
    const handleOnAdd = (quantity) => {
        // Llamamos a la función global para que App.jsx actualice el NavBar
        onAddGlobal(quantity); 
        
        // Opc.dejar el alert para confirmar visualmente
        alert(`¡Éxito! Se agregaron ${quantity} unidades al carrito.`);
    };

    if (!product) return <div className="item-detail-container">Cargando producto...</div>;

    return (
        <div className='item-detail-container'>
            <div className='item-detail-card'>
                <img src={product.img} alt={product.name} className="item-detail-img" />
                
                <div className='item-detail-info'>
                    <h1>{product.name}</h1>
                    <p className='description'>{product.description}</p>
                    <p className='price-detail'>S/ {product.price}</p>
                    
                    {/* 3. usar la función handleOnAdd */}
                    <ItemCount 
                        stock={product.stock || 10} 
                        initial={1} 
                        onAdd={handleOnAdd} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;