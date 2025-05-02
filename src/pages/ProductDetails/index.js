import React, { useRef } from "react";
import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

const ProductDetails = () => {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const bigSliderRef = useRef(null);

  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    ref: bigSliderRef,
    afterChange: (index) => setActiveIndex(index),
  };

  const productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleThumbnailClick = (index) => {
    if (bigSliderRef.current) {
      bigSliderRef.current.slickGoTo(index);
    }
  };

  const imageUrls = [
    "https://mironcoder-hotash.netlify.app/images/product/single/01.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/02.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/03.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/04.webp",
    "https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
  ];

  return (
    <div className="right-content w-100">

      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center justify-content-between mb-4 breadcrumbCard">
        <h5 className="mb-0">Product View</h5>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} to="/" underline="hover" color="inherit" className="breadcrumb-link">
            <IoMdHome/>Dashboard
          </MuiLink>
          <Typography className="breadcrumb-current" component="span" sx={{ padding: '6px 10px', borderRadius: '16px' }}>
            Products
          </Typography>
          <Typography className="breadcrumb-current" component="span" sx={{ padding: '6px 10px', borderRadius: '16px' }}>
            Product View
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="card productDetailsSEction">
        <div className="row">
          <div className="col-md-5">
            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Gallery</h6>
              <Slider {...productSliderOptions} ref={bigSliderRef} className="sliderBig mb-2">
                {imageUrls.map((url, index) => (
                  <div className="item" key={index}>
                    <img src={url} className="w-100" />
                  </div>
                ))}
              </Slider>
              <Slider {...productSliderSmlOptions} className="sliderSml">
                {imageUrls.map((url, index) => (
                  <div
                    className={`item thumbnail-item ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    style={{ cursor: 'pointer' }}>
                    <img src={url} className="w-100" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-md-7">
            <div className="pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Details</h6>
              <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

              <div className="productInfo mt-4">
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon"><MdBrandingWatermark/></span>
                    <span className="name">Brand</span>
                  </div>
                  <div className="col-sm-9">
                    <span>Ecstasy</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon"><BiSolidCategoryAlt/></span>
                    <span className="name">Category</span>
                  </div>
                  <div className="col-sm-9">
                    <span>Man's</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon"><BiSolidCategoryAlt/></span>
                    <span className="name">Tags</span>
                  </div>
                  <div className="col-sm-9">
                    <span>Man's</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;