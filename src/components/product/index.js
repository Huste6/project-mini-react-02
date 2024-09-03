import {useState,useEffect} from "react";
import { getProductList } from "../../service/productService";
import "./product.scss";
import ProductItem from "./productItem";

function Product() {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            const result = await getProductList();
            setProduct(result);
        }
        fetchApi();
    },[]);

    return (
        <>
            <div className="product">
                {product.map(item => (
                    <ProductItem key={item.id} item = {item}/>
                ))}
            </div>
        </>
    )
}
export default Product;