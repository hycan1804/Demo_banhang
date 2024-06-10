import { Carousel } from "primereact/carousel";
import React, { useState, useEffect } from "react";
const Silder = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "/Images/product1.jpg",
    },
    {
      id: 2,
      img: "Images/product1.jpg",
    },
    {
      id: 3,
      img: "/Images/product1.jpg",
    },
    {
      id: 4,
      img: "/Images/product1.jpg",
    },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const productTemplate = (product) => {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + product.img} />
      </div>
    );
  };
  return (
    <div>
      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};
export default Silder;
