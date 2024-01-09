import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch=useDispatch();

  const addItemToCarthandler=()=>{
   dispatch(cartActions.addItemToCarthandler({ title, price, description,id }))
   console.log({id,title,price,description})
  }

  return (
    <li className={classes.item}  key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCarthandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
