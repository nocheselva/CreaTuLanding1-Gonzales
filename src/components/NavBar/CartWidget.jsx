// 1: Recibo el cartCount como prop
const CartWidget = ({ cartCount }) => {
  return (
    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
      <i className="bi bi-cart3" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      
      {cartCount > 0 && (
        <span className="badge rounded-pill bg-danger" style={{ marginLeft: '5px' }}>
          {cartCount}
        </span>
      )}
      
    </div>
  );
};

export default CartWidget;