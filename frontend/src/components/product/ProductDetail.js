import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { createReview, getProduct } from "../../actions/productActions"
import Loader from '../layouts/Loader';
import { Carousel } from 'react-bootstrap';
import MetaData from "../layouts/MetaData";
import { addCartItem } from "../../actions/cartActions";
import {clearReviewSubmitted, clearError, clearProduct} from '../../slices/productSlice';
import {Modal} from 'react-bootstrap';
import { toast } from "react-toastify";
import './pd.css';
import './product.css';


export default function ProductDetail () {
    const { loading, product = {}, isReviewSubmitted, error} = useSelector((state)=>state.productState);
    const { user } = useSelector(state => state.authState);
    const dispatch = useDispatch();
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {
        const count = document.querySelector('.count')
        if(product.stock ===0 ||  count.valueAsNumber >= product.stock) return;
        const qty = count.valueAsNumber + 1;
        setQuantity(qty);
    }
    const decreaseQty = () => {
        const count = document.querySelector('.count')
        if(count.valueAsNumber === 1 ) return;
        const qty = count.valueAsNumber - 1;
        setQuantity(qty);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");

    const reviewHandler = () => {
        const formData = new FormData();
        formData.append('rating', rating);
        formData.append('comment', comment);
        formData.append('productId', id);
        dispatch(createReview(formData))

    }

    useEffect(()=>{
        if(isReviewSubmitted) {
            handleClose()
            toast('Review Submitted successfully',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearReviewSubmitted())
            })
            
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearError()) }
            })
            return
        }
        if(!product._id || isReviewSubmitted) {
            dispatch(getProduct(id))
        }

        return () => {
            dispatch(clearProduct())
        }
        

    },[dispatch,id,isReviewSubmitted, error])



    return (
        <Fragment>
            {loading? <Loader/>:
            <Fragment>
                <MetaData title={product.name} />
                <div className="row f-flex justify-content-around">
                
                <div class="container">
	        <div class="heading-section">
	            <h2>Product Details</h2>
	        </div>
	        <div class="row">
	        	<div class="col-md-6">
	        		<div id="slider" class="owl-carousel product-slider">
						<div class="item">
                        <Carousel pause="hover">
                            {product.images && product.images.length > 0 && product.images.map(image =>
                                <Carousel.Item key={image._id}>
                                    <img  src={image.image} alt={product.name} height="500" width="500" />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
					</div>
	        	</div>
	        	<div class="col-md-6">
	        		<div class="product-dtl">
        				<div class="product-info">
		        			<div class="product-name">{product.name}</div>
                            <p id="product_id">Product # {product._id}</p>
		        			<p id="product_price">₹{product.price}</p>
                            <p>Status: <span className={product.stock > 0 ?'greenColor':'redColor'} id="stock_status">{ product.stock > 0 ?'In Stock':'Out of Stock'}</span></p>

		        		</div>
                        <h4 className="mt-2">Description:</h4>
	        			<p>{product.description}</p>
                        <div class="row">
	        				<div class="col-md-6">
	        					<label for="size">Width</label>
								<input id="size" name="size" class="form-control"/>
									
	        				</div>
	        				<div class="col-md-6">
	        					<label for="color">Height</label>
								<input id="size" name="size" class="form-control"/>
	        				</div>
	        			</div>
	        			<div class="product-count">
	        				<label for="size">Quantity</label>
	        				<form action="#" class="display-flex">
							    <div class="qtyminus" onClick={decreaseQty} >-</div>
							    <input type="text" name="quantity" value={quantity} readOnly class="qty"/>
							    <div class="qtyplus" onClick={increaseQty}>+</div>
							</form>
							<button disabled={product.stock===0?true:false} 
                     onClick={()=>{
                        dispatch(addCartItem(product._id, quantity))
                        toast('Cart Item Added!',{
                            type: 'success',
                            position: toast.POSITION.BOTTOM_CENTER
                        })
                    }}  class="round-black-btn">Add to Cart</button>
	        			</div>
                    
	        		</div>
	        	</div>
	        </div>
		</div>
	
                </div>
            </Fragment>}
        </Fragment>
    )
}