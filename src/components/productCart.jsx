import React from "react";
import "./product.scss"

const ProductCart = ({ productDeatil = {} }) => {
    const { category = "", description = "", id = "", image = "", price = "", rating = {}, title = "" } = productDeatil || {};
    const { count = "", rate = "" } = rating || {}
    return (
        <div className="product-deatil-cont">
            <div className="title-price">
                <div className="product-tiltle">{title}</div>
                <div className="price">Rs. {price}</div>
            </div>
            <div className="rating-image">
                <img className="product-image" src = {image} alt="produc-image"/>
                <div className="rating">{"Rate : " + rate + " " + " count : " + count}</div>
            </div>
            <div className="desciption">{description}</div>
            
        </div>
    )
}
export default ProductCart