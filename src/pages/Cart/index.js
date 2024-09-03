import { useDispatch, useSelector } from "react-redux";
import CartList from "./cartList";
import "./cart.scss";
import { DeleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();

    const total = cart.reduce((sum,item)=>{
        const priceNew = (item.info.price - item.info.price * item.info.discountPercentage / 100);
        return sum + priceNew * item.quantity;
    },0);

    const handleDeleteAll = () => {
        dispatch(DeleteAll());
    }

    return (
        <>
            <h2>Giỏ hàng</h2>
            <button onClick={handleDeleteAll}>Delete All</button>

            {cart.length > 0 ? (
                <>
                    <CartList />
                    <div className="cart__total">
                        Total money: <span>{total.toFixed(0)}$</span>
                    </div>
                </>
            ):(
                <span>Gio hang trong</span>
            )} 
        </>
    )
}
export default Cart;