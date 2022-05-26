import React from "react";
import { useState } from "react";
import { createContext } from "react";
import data from "./data.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [favorite, setFavorite] = useState([]);
  const [productsDetails, setProductDetails] = useState(products[0]);

  const allCategories = [
    "Tất cả",
    ...new Set(data.map((item) => item.type.name)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (cate) => {
    if (cate === "Tất cả") {
      setProducts(data);
      return;
    }
    const newItems = data.filter((item) => item.type.name === cate);
    setProducts(newItems);
  };

  const handleFavorite = (product) => {
    const duplicate = favorite.filter((item) => item.id == product.id);
    if (duplicate != "") {
      setFavorite([...favorite]);
    } else setFavorite([...favorite, { ...product }]);
  };

  const handleProductsDetails = (prod) => {
    setProductDetails(prod);
  };

  const filterProductsCity = (params) => {
    const productsCity = data.filter((item) => item.city === params);
    if (params) {
      setProducts(productsCity);
    }
  };

  const filterProductsArea = (params) => {
    switch (params) {
      case 29:
        setProducts([...data.filter((item) => item.area <= params)]);
        break;
      case 30:
        setProducts([...data.filter((item) => item.area > params)]);
        break;
      case 45:
        setProducts([
          ...data.filter((item) => item.area > 30 && item.area < params),
        ]);
        break;
      case 60:
        setProducts([
          ...data.filter((item) => item.area > 45 && item.area < params),
        ]);
        break;

      default:
        console("Error");
    }
  };

  const searchProducts = (target) => {
    if (target) {
      setProducts(
        data.filter((item) => {
          return item.title.toLowerCase().includes(target.value.toLowerCase());
        })
      );
    } else setProducts(data);
  };

  const dataContext = {
    products,
    allCategories,
    categories,
    filterItems,
    favorite,
    handleFavorite,
    productsDetails,
    handleProductsDetails,
    filterProductsCity,
    filterProductsArea,
    searchProducts,
  };

  return (
    <ProductContext.Provider value={dataContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
