import { useSelector } from "react-redux";
import CartItem from "./cartItem";

function CartList () {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <CartItem item={item}/>
                ))}
            </div>
        </>
    )
}
export default CartList;