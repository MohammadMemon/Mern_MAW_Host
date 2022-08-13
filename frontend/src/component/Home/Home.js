import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination,} from "swiper";
import "swiper/css/pagination"
import ProductCard from "./ProductCard.js";
import { NavLink } from "react-router-dom";

const Home = () => {

  function scrollWin() {
    window.scrollTo(0, 0);
  }

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Myartworld Resin Shop | Myartworlld" />
          <div className="banner">
            <Swiper
              modules={[Autoplay, Pagination]}
              navigation
              effect
              speed={800}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop
              className="swiper"
            >
              <SwiperSlide className="swiperSlide">
                <img className="banners" src="banner1.webp" alt="banner" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <img className="banners" src="banner2.webp" alt="banner" />
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <img className="banners" src="banner3.webp" alt="banner" />
              </SwiperSlide>
            </Swiper>
          </div>
          
              <p className="line-1 anim-typewriter">Welcome to MyArtWorld Resin Shop, Exciting  Resin Artwork Below.</p>
         

          <h2 className="homeHeading">Featured Products <p>Stylish Resin Art & More</p></h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          
            <NavLink className="link" to="/products" onClick={ scrollWin()}><h2 className="homeProHeading">See all Products</h2> </NavLink>

            <p className="line-1 anim-typewriter2">Customized Product Upto 30% Off - All Resin Products & More.</p>
         

          <h2 className="homeHeading">New Arrivals<p>Stylish Resin Art & More</p></h2>

          <div className="container" id="container">
            {products &&
              products.reverse().map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
