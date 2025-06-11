import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
    // getting data of all products using contextAPI
    const { products,search,showSearch } = useContext(ShopContext);
  const [sortType,setsortType]=useState('Relevant');
  const [showFilter, setshowFilter] = useState(false);

  // to map the products create the state variable
  const [filterProducts, setfilterProducts] = useState([]);

  // create state variables to filter the products
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);

  // toggle function for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  // toggle function for sub-category
  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // apply filter
  const applyFilter = () => {

    let productCopy = products.slice();
     if (showSearch && typeof search === 'string' ) {
    const searchText = search.toLowerCase();
    productCopy = productCopy.filter(item =>
      String(item?.name ?? '').toLowerCase().includes(searchText)
    );
  }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setfilterProducts(productCopy);
  };

  // for sorting products using price
  const sortProducts=()=>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setfilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
        case 'high-low':
          setfilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
          break;
          default:
            applyFilter();
            break;
    }
  }
useEffect(()=>{
sortProducts();
},[sortType])
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);



  return (
    <div className="flex border-t gap-10 justify-center pt-10  ">
      {/* filter options */}
      <div className="min-w-60">
        <p
          className="my-2 flex items-center cursor-pointer gap-2 text-xl"
          onClick={() => {
            setshowFilter(!showFilter);
          }}
        >
          FILTERS
          <IoIosArrowForward
            className={`text-gray-500 text-base sm:hidden ${
              showFilter ? "rotate-90 duration-300  " : ""
            }`}
          />
        </p>
        {/* to hide the filter box in the small screen thid condition is used */}
        <div
          className={` border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="text-sm mb-3 font-[500] ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              kids
            </p>
          </div>
        </div>

        {/* Type Options */}
        <div className="min-w-60">
          <div
            className={`border border-gray-300 my-5 py-3 pl-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="text-sm font-[500] mb-3"> TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  className="w-3"
                  onChange={togglesubCategory}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Bottomwear"}
                  className="w-3"
                  onChange={togglesubCategory}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  className="w-3"
                  onChange={togglesubCategory}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collections"} />

          {/* Products sort features */}
          <select onChange={(e)=>{setsortType(e.target.value)}} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="Relevant">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-4">
          {filterProducts.map((val, i) => {
            return (
              <ProductItem
                key={i}
                id={val._id}
                name={val.name}
                price={val.price}
                image={val.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
