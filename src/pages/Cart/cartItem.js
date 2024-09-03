import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleUp = () => {
        dispatch(updateQuantity(item.id));
        inputRef.current.value = item.quantity;
    }

    const handleDown = () => {
        if(item.quantity > 1){
            dispatch(updateQuantity(item.id,-1));
            inputRef.current.value = item.quantity;
        }
    }

    const handleDeleteItem = () => {
        dispatch(deleteItem(item.id));
    }

    return (
        <>
            <div className="cart__item" key={item.id}>
                <div className="cart__image">
                    <img src={item.info.thumbnail} alt={item.info.title} />
                </div>
                <div className="cart__content">
                    <h4 className="cart__title">{item.info.title}</h4>
                    <div className="cart__price-new">{(item.info.price - item.info.price * item.info.discountPercentage / 100).toFixed(0)}$</div>
                    <div className="cart__price-old">{item.info.price}$</div>
                </div>
                <div className="cart__quantity">
                    <button onClick={handleDown}>-</button>
                    <input defaultValue={item.quantity} ref={inputRef}/>
                    <button onClick={handleUp}>+</button>
                </div>
                <button className="cart__delete" onClick={handleDeleteItem}>Delete</button>
            </div>
        </>
    )
}
export default CartItem;