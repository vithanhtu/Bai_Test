import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import Product from "../component/Product";
import { ProductContext } from "../context";
import { useContext } from "react";

const HomePage = () => {
  const [banerList, setBanerList] = useState({
    city: false,
    area: false,
  });

  const valueContext = useContext(ProductContext);
  const { filterProductsCity, filterProductsArea, searchProducts } =
    valueContext;

  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner-container">
          <div className="home-banner-title">
            <h1>Sàn giao dịch bất động sản</h1>
          </div>
          <div className="home-banner-content">
            <div className="banner-content-categories">
              <div className="banner-content-categories-item">
                <h1>Tỉnh</h1>
                <div
                  className="categories-item-select"
                  onClick={() =>
                    setBanerList({
                      ...banerList,
                      city: !banerList.city,
                    })
                  }
                >
                  <h5>Chọn tỉnh</h5>
                  {banerList.city ? <BiChevronUp /> : <BiChevronDown />}
                </div>

                {banerList.city ? (
                  <div className="categories-item-option">
                    <ul>
                      <li onClick={() => filterProductsCity("danang")}>
                        Đà Nẵng
                      </li>
                      <li onClick={() => filterProductsCity("hanoi")}>
                        Hà Nội
                      </li>
                      <li onClick={() => filterProductsCity("hochiminh")}>
                        Hồ Chí Minh
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="categories-item-option" hidden></div>
                )}
              </div>
              <div className="banner-content-categories-item">
                <h1>Diện tích</h1>
                <div
                  className="categories-item-select"
                  onClick={() =>
                    setBanerList({
                      ...banerList,
                      area: !banerList.area,
                    })
                  }
                >
                  <h5>Chọn diện tỉnh</h5>
                  {banerList.area ? <BiChevronUp /> : <BiChevronDown />}
                </div>

                {banerList.area ? (
                  <div className="categories-item-option">
                    <ul>
                      <li onClick={() => filterProductsArea(29)}>
                        {"<"} 30 m2
                      </li>
                      <li onClick={() => filterProductsArea(45)}>30 - 45 m2</li>
                      <li onClick={() => filterProductsArea(60)}>45 - 60 m2</li>
                      <li onClick={() => filterProductsArea(30)}>
                        {">"} 30 m2
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="categories-item-option" hidden></div>
                )}
              </div>
            </div>

            <div className="home-banner-search">
              <input
                onChange={(e) => searchProducts(e.target)}
                placeholder="Tìm kiếm"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <Product />
    </div>
  );
};

export default HomePage;
