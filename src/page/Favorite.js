import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import { MdFavorite } from "react-icons/md";

const Favorite = () => {
  const valueContext = useContext(ProductContext);
  const { favorite } = valueContext;

  return (
    <div className="favorite">
      <h1 className="favorite-title">Danh mục ưa thích</h1>

      <div className="product-container">
        {favorite.map((item, index) => {
          return (
            <div key={index} className="product-item">
              <div className="product-item-img">
                <img src={require(`../${item.images[0]}`)}></img>
                <div className="product-item-favorite">
                  <button>{item.type.name}</button>
                  <MdFavorite className="bg-favorie navbar-favorite-icon" />
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
  );
};

export default Favorite;
