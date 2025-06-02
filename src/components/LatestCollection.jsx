import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  // getting products data using context API
  const { products } = useContext(ShopContext);

  // to add recently added 10 products
  const [latestProducts, setLatestProducts] = useState([]);

  // to load the 10 prodcuts from products from above products state
  useEffect(() => {
    setLatestProducts(products.slice(0, 11));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((val,i)=>{
            return(
              <ProductItem key={i} id={val._id} image={val.image} name={val.name} price={val.price}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default LatestCollection;
