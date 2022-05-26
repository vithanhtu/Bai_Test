import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { ProductContext } from "../context";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Details = () => {
  const valueContext = useContext(ProductContext);
  const { productsDetails } = valueContext;
  console.log(productsDetails);

  return (
    <div className="details">
      <div className="banner-details">
        <div className="slider-btn">
          <button className="prslider-btn-prev">
            <GrFormPrevious />
          </button>
          <button className="prslider-btn-next">
            <GrFormNext />
          </button>
        </div>
        <img src={require(`../${productsDetails.images[1]}`)}></img>
      </div>
      <div className="container">
        <div className="details-container">
          <div className="details-info">
            <div className="details-title">
              <h1>{productsDetails.title}</h1>
              <p>{productsDetails.address}</p>
              <p>{productsDetails.area}m2</p>
            </div>
            <h1 className="details-info-price">
              {productsDetails.price.from} - {productsDetails.price.to} Tỷ
            </h1>
          </div>

          <div className="details-content">
            <h2>Thông tin chi tiết</h2>
            <p>{productsDetails.description}</p>

            <div className="details-content-address">
              <h5>I. Vị trí dự án</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
