import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "../../components/productCart";
import ApiService from "../../utils";
import './index.scss'

const LandingPage = ({allProduct}) => {
    const isAllProduct = allProduct.length > 0
    return (
        <>
            <div className="landing-page-container">
                <div className="all-product">
                    {isAllProduct &&
                        allProduct.map((item, i) => {
                            return (
                                <>
                                <ProductCart productDeatil={item} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default LandingPage