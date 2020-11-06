import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = (props) => (
    <div className="product-layout product-grid col-md-4 col-xs-12">
        <div className="product-block product-thumb">
            <div className="product-block-inner">
                <div className="image product-image">
                    <div className="image product-image_title">
                        <a href="/">{props.name}</a>
                    </div>
                    <a href="/">
                        <img
                            src={props.thumbnail.href}
                            title={props.name}
                            alt={props.name}
                            className="img-responsive reg-image"
                        />
                        <img
                            className="img-responsive hover-image"
                            src="/image/product-large-a.jpg"
                            title="product name"
                            alt="product name"
                        />
                    </a>
                    <div className="price product_price">
                        {props.price ? (
                            <div>
                                <span className="price-new">
                                    ${props.price.selling}
                                </span>{' '}
                                <span className="price-old">
                                    ${props.price.regular}
                                </span>
                            </div>
                        ) : (
                            ''
                        )}
                        {props.priceRange ? (
                            <div>
                                <span className="price-new">
                                    ${props.priceRange.selling.low} - $
                                    {props.priceRange.selling.high}
                                </span>
                                <span className="price-old">
                                    {props.priceRange.regular
                                        ? '$' +
                                          props.priceRange.regular.low +
                                          ' - ' +
                                          '$' +
                                          props.priceRange.regular.high
                                        : ''}
                                </span>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="product-details">
                    <div className="caption">
                        <h4>
                            <a href="/">Product Name</a>
                        </h4>

                        <p className="desc"></p>
                    </div>
                </div>
                <div className="product-block-hover">
                    <div className="button-group">
                        <button type="button" className="addtocart">
                            View Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ProductItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    links: PropTypes.object,
    price: PropTypes.object,
    thumbnail: PropTypes.object,
    hero: PropTypes.object,
    images: PropTypes.array,
    reviews: PropTypes.object,
};

export default ProductItem;
