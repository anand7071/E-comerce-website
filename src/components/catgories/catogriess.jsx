import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ApiService from "../../utils";
import "./catogries.scss"

const Catogries = ({ setSelectedCat = {}, selectedcat = "",allcat }) => {
    const isAllCat = allcat.length > 0;
    return (
        <div className="all-cat-cont">
            <div className={`items ${selectedcat == "All Products" && "item-selected"}`} onClick={() => setSelectedCat("All Products")}>
                All Products
            </div>
            {isAllCat && allcat.map((item, i) => {
                return (
                    <div className={`items ${selectedcat == item && "item-selected"}`} onClick={() => setSelectedCat(item)}>
                        {item}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Catogries