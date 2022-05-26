import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
  const valueContext = useContext(ProductContext);
  const {
    products,
    categories,
    filterItems,
    handleFavorite,
    handleProductsDetails,
  } = valueContext;

  return (
    <div className="container">
      <div className="product">
        <div className="product-wrap">
          <h1 className="product-title">SẢN PHẨM</h1>
          <div className="product-categories">
            {categories.map((cate, index) => {
              return (
                <button
                  onClick={() => filterItems(cate)}
                  key={index}
                  className="product-categories-btn"
                >
                  {cate}
                </button>
              );
            })}
          </div>

          <div className="product-container">
            {products.map((item, index) => {
              return (
                <div key={index} className="product-item">
                  <div className="product-item-img">
                    <Link
                      to={`/${item.id}`}
                      onClick={() => handleProductsDetails(item)}
                    >
                      <img src={require(`../${item.images[0]}`)}></img>
                    </Link>
                    <div className="product-item-favorite">
                      <button>{item.type.name}</button>
                      <MdFavorite
                        className="navbar-favorite-icon"
                        onClick={() => handleFavorite(item)}
                      />
                    </div>
                  </div>
                  <div className="produc-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.address}</p>
                    <div className="product-item-price">
                      <p>Giá từ: </p>
                      <span>
                        {item.price.from} - {item.price.to} tỷ
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
