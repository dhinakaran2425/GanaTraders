import { Link } from 'react-router-dom';
import './product.css';
export default function Product ({product, col}) {
    return (
        <div class="product1">
            <div class="image-box1">
      <div class="images1"> {product.images.length > 0 &&
                <img
                className="card-img-top mx-auto"
                src={product.images[0].image}
                alt={product.name}
                />}</div> 
    </div>
      <h2 class="item1"><Link to={`/product/${product._id}`}>{product.name}</Link></h2>
      
      <h3 class="price1">₹{product.price}</h3>
      <button type="button" name="item-1-button" class="item-1-button"><Link to={`/product/${product._id}`}>View Details</Link></button>
</div>
    )
}