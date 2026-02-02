import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { getProducts } from '../../asyncMock'; 
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then(response => {
        if (categoryId) {
          const filteredProducts = response.filter(prod => prod.category === categoryId);
          setProducts(filteredProducts);
        } else {
          setProducts(response);
        }
      })
      .catch(error => console.error("Error cargando productos:", error));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2 className="greeting-message">{greeting}</h2>
      <div className="product-list">
        {products.map(prod => (
          <div key={prod.id} className="product-card">
            <img src={prod.img} alt={prod.name} className="product-img" />
            <h3>{prod.name}</h3>
            <p className="price">S/ {prod.price}</p> 
            <Link to={`/item/${prod.id}`} className="btn-primary">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
