import React from 'react';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";



const Homepage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="intro-slider-container mb-5">
          <div
            className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light owl-loaded owl-drag"
            data-toggle="owl"
            data-owl-options='{
                  "dots": true,
                  "nav": false, 
                  "responsive": {
                      "1200": {
                          "nav": false,
                          "dots": false
                      }
                  }
              }'
          >
            {/* End .intro-slide */}
            {/* End .intro-slide */}
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1482px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 4446
                }}
              >
                <div className="owl-item cloned" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-1.png)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3>WOMEN'S</h3>
                          </div>
                          <div className="content">
                            <h3>RUNNING &amp;</h3>
                            <h3>TRAINING SHIRTS</h3>
                          </div>
                          <div className="price">
                            <h3>SAVE UP TO 30%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-2.jpg)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3 className="darkWhite">DEAL OF THE DAY</h3>
                          </div>
                          <div className="content">
                            <h3>
                              IT'S TIME TO UPGRADE
                              <br />
                              YOUR HIKING KIT
                            </h3>
                          </div>
                          <div className="price">
                            <h3 className="darkWhite">SAVE UP TO 15%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-1.png)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3>WOMEN'S</h3>
                          </div>
                          <div className="content">
                            <h3>RUNNING &amp;</h3>
                            <h3>TRAINING SHIRTS</h3>
                          </div>
                          <div className="price">
                            <h3>SAVE UP TO 30%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
                <div className="owl-item" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-2.jpg)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3 className="darkWhite">DEAL OF THE DAY</h3>
                          </div>
                          <div className="content">
                            <h3>
                              IT'S TIME TO UPGRADE
                              <br />
                              YOUR HIKING KIT
                            </h3>
                          </div>
                          <div className="price">
                            <h3 className="darkWhite">SAVE UP TO 15%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-1.png)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3>WOMEN'S</h3>
                          </div>
                          <div className="content">
                            <h3>RUNNING &amp;</h3>
                            <h3>TRAINING SHIRTS</h3>
                          </div>
                          <div className="price">
                            <h3>SAVE UP TO 30%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 741 }}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo-21/slider/slide-2.jpg)"
                    }}
                  >
                    <div className="container intro-content">
                      <div className="row">
                        <div className="intro">
                          <div className="title">
                            <h3 className="darkWhite">DEAL OF THE DAY</h3>
                          </div>
                          <div className="content">
                            <h3>
                              IT'S TIME TO UPGRADE
                              <br />
                              YOUR HIKING KIT
                            </h3>
                          </div>
                          <div className="price">
                            <h3 className="darkWhite">SAVE UP TO 15%</h3>
                          </div>
                          <div className="action">
                            <a href="category.html" className="btn btn-primary">
                              <span>DISCOVER NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .intro-content */}
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <i className="icon-angle-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="icon-angle-right" />
              </button>
            </div>
            <div className="owl-dots">
              <button role="button" className="owl-dot active">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
            </div>
          </div>
          {/* End .intro-slider owl-carousel owl-simple */}
          <span className="slider-loader" />
          {/* End .slider-loader */}
        </div>
        {/* End .intro-slider-container */}
        <div className="container banner-container">
          <div className="col-lg-4 col-md-8 col-sm-10 col-12 col-pd1">
            <a href="category.html">
              <img src="assets/images/demos/demo-21/banner/banner-1.jpg" />
            </a>
            <div className="banner-content">
              <div className="title">
                <a href="category.html">
                  <h3 className="darkWhite">It's a lifestyle.</h3>
                </a>
              </div>
              <div className="content">
                <a href="category.html">
                  <h3>Running Apparel</h3>
                </a>
                <a href="category.html">
                  <h3>END OF SEASON SALE</h3>
                </a>
              </div>
              <div className="action">
                <a href="category.html" className="btn btn-demoprimary">
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* End .row */}
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10 col-12 col-pd1">
            <a href="category.html">
              <img src="assets/images/demos/demo-21/banner/banner-2.jpg" />
            </a>
            <div className="banner-content">
              <div className="title">
                <a href="category.html">
                  <h3 className="darkWhite">Hike Your Next Trail </h3>
                </a>
              </div>
              <div className="content">
                <a href="category.html">
                  <h3>NEW SEASON</h3>
                </a>
                <a href="category.html">
                  <h3>NEW GEAR</h3>
                </a>
              </div>
              <div className="action">
                <a href="category.html" className="btn btn-demoprimary">
                  <span>DISCOVER NOW</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* End .row */}
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10 col-12 col-pd1">
            <a href="category.html">
              <img src="assets/images/demos/demo-21/banner/banner-3.jpg" />
            </a>
            <div className="banner-content">
              <div className="title">
                <a href="category.html">
                  <h3 className="darkWhite">Summer Sale</h3>
                </a>
              </div>
              <div className="content">
                <a href="category.html">
                  <h3>Swimwear sale</h3>
                </a>
                <a href="category.html">
                  <h3>Save up to 30%</h3>
                </a>
              </div>
              <div className="action">
                <a href="category.html" className="btn btn-demoprimary">
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
            </div>
            {/* End .row */}
          </div>
        </div>
        <div className="container logos">
          <div
            className="owl-carousel mb-5 owl-simple owl-loaded owl-drag"
            data-toggle="owl"
            data-owl-options='{
                  "nav": true, 
                  "dots": false,
                  "margin": 10,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "420": {
                          "items":3
                      },
                      "600": {
                          "items":4
                      },
                      "900": {
                          "items":5
                      },
                      "1024": {
                          "items":6
                      }
                  }
              }'
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1280
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/1.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/2.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/3.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/4.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/5.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/6.png" alt="Brand Name" />
                  </a>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "172.75px", marginRight: 10 }}
                >
                  <a href="#" className="brand">
                    <img src="assets/images/brands/7.png" alt="Brand Name" />
                  </a>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev disabled">
                <i className="icon-angle-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="icon-angle-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
          {/* End .owl-carousel */}
        </div>
        {/* End .container */}
        <div className="container bestsellers">
          <hr className="mb-3" />
          <div className="heading">
            <h2 className="title text-center">BEST SELLERS</h2>
            <p className="content text-center mb-4">
              The Trends Boutique: The latest fashion trends from top brands!
            </p>
          </div>
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag"
            data-toggle="owl"
            data-owl-options='{
                  "nav": true, 
                  "dots": false,
                  "margin": 20,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "768": {
                          "items":3
                      },
                      "992": {
                          "items":4
                      }
                  }
              }'
          >
            {/* End .product */}
            {/* End .product */}
            {/* End .product */}
            {/* End .product */}
            {/* End .product */}
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1853
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-1-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-1-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Nike Renew Arena</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$58.99</span>
                        <span className="old-price">Was $75.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#c12f46" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#d3def0" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                        <a href="#" className="btn-addtolist">
                          <span>&nbsp;Add to Wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </div>
                    {/* End .product-body */}
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-2-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-2-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div
                        className="product-countdown"
                        data-until="+9h"
                        data-format="HMS"
                        data-relative="true"
                        data-labels-short="true"
                      />
                      {/* End .product-countdown */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Jackets &amp; Vests</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Advanced Skin 12 Set</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$199.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div
                        className="product-nav product-nav-dots"
                        style={{ visibility: "hidden" }}
                      >
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#db7e6c" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                        <a href="#" className="btn-addtolist">
                          <span>&nbsp;Add to Wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </div>
                    {/* End .product-body */}
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-3-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-3-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Tops</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">On Performance-T Shirt</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$99.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "40%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#db7e6c" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#5a7399" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                        <a href="#" className="btn-addtolist">
                          <span>&nbsp;Add to Wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </div>
                    {/* End .product-body */}
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-4-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-4-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bottoms</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">CB Carbon 2 Cycling Short</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$159.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div
                        className="product-nav product-nav-dots"
                        style={{ visibility: "hidden" }}
                      >
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#db7e6c" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                        <a href="#" className="btn-addtolist">
                          <span>&nbsp;Add to Wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </div>
                    {/* End .product-body */}
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-1-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-21/bestSellers/product-1-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div
                        className="product-countdown"
                        data-until="+7h"
                        data-format="HMS"
                        data-relative="true"
                        data-labels-short="true"
                      />
                      {/* End .product-countdown */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Tops</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">On Performance-T Shirt</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$99.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "40%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#db7e6c" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#5a7399" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                        <a href="#" className="btn-addtolist">
                          <span>&nbsp;Add to Wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </div>
                    {/* End .product-body */}
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev disabled">
                <i className="icon-angle-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="icon-angle-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
          {/* End .owl-carousel */}
        </div>
        <div className="choose-style">
          <div className="container row">
            <div className="banner-intro col-lg-5">
              <h3 className="title">
                Get Your
                <br />
                Inspiration
                <br />
                In The Street.
              </h3>
              <p className="darkWhite">IN THIS LOOK</p>
              <h4 className="content darkWhite">• Stowell Hood Fleece</h4>
              <h4 className="content darkWhite">• Force Tight </h4>
              <h4 className="content darkWhite">• Blitzing 3.0 Cap</h4>
              <p className="price darkWhite">$55.00 - $1,298.00</p>
              <a href="category.html" className="btn btn-demoprimary">
                <span>BUY ALL </span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            <div className="carousel col-lg-7">
              <div className="heading">
                <h2 className="title">Choose Your Style</h2>
                <p className="content">
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                  turpis
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/chooseStyle/product-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Tops</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Stowell Hood Fleece</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$55.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/chooseStyle/product-2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div
                        className="product-countdown"
                        data-until="+9h"
                        data-format="HMS"
                        data-relative="true"
                        data-labels-short="true"
                      />
                      {/* End .product-countdown */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Force Tight</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$135.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/chooseStyle/product-3.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Blitzing 3.0 Cap</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$29.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container category-banner">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="category.html">
                <img src="assets/images/demos/demo-21/banner/footware.jpg" />
              </a>
              <div className="banner-content">
                <a href="category.html">
                  <h3 className="category"> FOOTWEAR </h3>
                </a>
                <a href="category.html" className="action">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="category.html">
                <img src="assets/images/demos/demo-21/banner/accessories.jpg" />
              </a>
              <div className="banner-content">
                <a href="category.html">
                  <h3 className="category"> ACCESSORIES </h3>
                </a>
                <a href="category.html" className="action">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="category.html">
                <img src="assets/images/demos/demo-21/banner/mens.jpg" />
              </a>
              <div className="banner-content">
                <a href="category.html">
                  <h3 className="category"> MEN'S </h3>
                </a>
                <a href="category.html" className="action">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="category.html">
                <img src="assets/images/demos/demo-21/banner/womens.jpg" />
              </a>
              <div className="banner-content">
                <a href="category.html">
                  <h3 className="category"> WOMEN'S </h3>
                </a>
                <a href="category.html" className="action">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container new-arrivals">
          <hr className="mb-5 mt-8" />
          <div className="heading heading-center mb-3">
            <h2 className="title">NEW ARRIVALS </h2>
            {/* End .title */}
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="arrivals-all-link"
                  data-toggle="tab"
                  href="#arrivals-all-tab"
                  role="tab"
                  aria-controls="arrivals-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="arrivals-women-link"
                  data-toggle="tab"
                  href="#arrivals-women-tab"
                  role="tab"
                  aria-controls="arrivals-women-tab"
                  aria-selected="false"
                >
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="arrivals-men-link"
                  data-toggle="tab"
                  href="#arrivals-men-tab"
                  role="tab"
                  aria-controls="arrivals-men-tab"
                  aria-selected="false"
                >
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="arrivals-shoes-link"
                  data-toggle="tab"
                  href="#arrivals-shoes-tab"
                  role="tab"
                  aria-controls="arrivals-shoes-tab"
                  aria-selected="false"
                >
                  Shoes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="arrivals-acc-link"
                  data-toggle="tab"
                  href="#arrivals-acc-tab"
                  role="tab"
                  aria-controls="arrivals-acc-tab"
                  aria-selected="false"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* End .heading */}
          <div className="tab-content tab-content-carousel">
            <div
              className="tab-pane p-0 fade show active"
              id="arrivals-all-tab"
              role="tabpanel"
              aria-labelledby="arrivals-all-link"
            >
              <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">UA Spawn Low</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$77.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#34529d" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Jackets &amp; Vests</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">The North Face Fanorak 2.0</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$76.99</span>
                        <span className="old-price">Was $109.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-3.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Osprey Talia</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$67.50</span>
                        <span className="old-price">Was $150.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-4.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Ignite Limitless Leather</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$52.66</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-5.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Small Sleeping Bag</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$299.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-6.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Tops</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Alphaskin Sport Bra</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$34.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#d64042" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-7.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Jackets &amp; Vests</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Watertight Jacket</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$76.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-8.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Y-3 by Yohji Yamamoto</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$239.99</span>
                        <span className="old-price">Was $400.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-9.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Marmot Empire Daypack</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$59.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-10.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">On Cloudflyer</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$127.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="arrivals-women-tab"
              role="tabpanel"
              aria-labelledby="arrivals-women-link"
            >
              <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Jackets &amp; Vests</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">The North Face Fanorak 2.0</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$76.99</span>
                        <span className="old-price">Was $109.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-6.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Tops</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Alphaskin Sport Bra</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$34.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#d64042" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="arrivals-men-tab"
              role="tabpanel"
              aria-labelledby="arrivals-men-link"
            >
              <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-7.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Jackets &amp; Vests</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Watertight Jacket</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$76.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="arrivals-shoes-tab"
              role="tabpanel"
              aria-labelledby="arrivals-shoes-link"
            >
              <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">UA Spawn Low</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$77.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "60%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#34529d" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-4.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Ignite Limitless Leather</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$52.66</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-8.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Y-3 by Yohji Yamamoto</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$239.99</span>
                        <span className="old-price">Was $400.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-10.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">On Cloudflyer</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$127.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "100%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="arrivals-acc-tab"
              role="tabpanel"
              aria-labelledby="arrivals-acc-link"
            >
              <div className="row">
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-3.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Osprey Talia</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$67.50</span>
                        <span className="old-price">Was $150.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-5.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Small Sleeping Bag</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$299.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                <div className="col-xl-5col col-lg-3 col-md-4 col-6">
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-21/newArrivals/product-9.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body text-center">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Marmot Empire Daypack</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="cur-price">$59.99</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{ width: "80%" }} />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-cart"
                          title="Add to cart"
                        >
                          <span>ADD TO CART</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <a href="#" className="btn-addtolist">
                        <span>&nbsp;Add to Wishlist</span>
                      </a>
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
              </div>
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}
          <div className="text-center">
            <a href="category.html" className="btn btn-viewMore">
              <span>VIEW MORE PRODUCTS</span>
              <i className="icon-long-arrow-right" />
            </a>
          </div>
        </div>
        {/* End .container */}
        <div className="container newsletter">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-21/newsLetter/banner.jpg)"
            }}
          >
            <div className="subscribe">
              <div className="subscribe-title text-center">
                <h1 className="intro-title2nd">SUBSCRIBE FOR OUR NEWSLETTER</h1>
                <h1 className="intro-title1st">
                  Learn about new offers and get more deals by joining our newsletter
                </h1>
              </div>
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required=""
                  />
                  <div className="input-group-append">
                    <button className="btn btn-subscribe" type="submit">
                      <span>Subscribe</span>
                      <i className="icon-long-arrow-right" />
                    </button>
                  </div>
                  {/* .End .input-group-append */}
                </div>
                {/* .End .input-group */}
              </form>
            </div>
          </div>
        </div>
        <div className="container service mt-4">
          <div className="col-sm-6 col-lg-3 col-noPadding">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-truck" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Payment &amp; Delivery</h3>
                {/* End .icon-box-title */}
                <p>Free shipping for orders over $50</p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-sm-6 col-lg-4 */}
          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-rotate-left" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Return &amp; Refund</h3>
                {/* End .icon-box-title */}
                <p>Free 100% money back guarantee</p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-sm-6 col-lg-4 */}
          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-life-ring" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Quality Support</h3>
                {/* End .icon-box-title */}
                <p>Alway online feedback 24/7</p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-sm-6 col-lg-4 */}
          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-envelope" />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">JOIN OUR NEWSLETTER</h3>
                {/* End .icon-box-title */}
                <p>10% off by subscribing to our newsletter</p>
              </div>
              {/* End .icon-box-content */}
            </div>
            {/* End .icon-box */}
          </div>
          {/* End .col-sm-6 col-lg-4 */}
        </div>
        <div className="container instagram-store text-center">
          <hr />
          <div className="heading">
            <h2 className="title">INSTAGRAM STORE</h2>
            {/* End .title */}
          </div>
          <div className="row">
            <div className="col-sm-3 banner-sm-div">
              <div className="banner-sm col-12 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-1.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
              <div className="banner-sm col-12 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-2.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 banner-lg instagram-feed">
              <img src="assets/images/demos/demo-21/instagramStore/banner-3.jpg" />
              <div className="instagram-feed-content">
                <a href="#">
                  <i className="icon-heart-o" />
                  280
                </a>
                <a href="#">
                  <i className="icon-comments" />
                  22
                </a>
              </div>
            </div>
            <div className="col-sm-3 banner-sm-div">
              <div className="banner-sm col-6 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-4.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
              <div className="banner-sm col-6 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-6.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 banner-sm-div">
              <div className="banner-sm col-6 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-5.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
              <div className="banner-sm col-6 instagram-feed">
                <img src="assets/images/demos/demo-21/instagramStore/banner-7.jpg" />
                <div className="instagram-feed-content">
                  <a href="#">
                    <i className="icon-heart-o" />
                    280
                  </a>
                  <a href="#">
                    <i className="icon-comments" />
                    22
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Homepage