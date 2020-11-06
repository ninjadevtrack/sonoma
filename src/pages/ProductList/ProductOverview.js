import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const starRating = (numberRating, maxRating) => {
    const rating = [];
    for (let i = 0; i < maxRating; i += 1) {
        rating.push(
            i < numberRating ? (
                <span key={i} className="fa fa-stack">
                    <i className="fa fa-star fa-stack-2x"></i>
                    <i className="fa fa-star-o fa-stack-2x"></i>
                </span>
            ) : (
                <span key={i} className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-2x"></i>
                </span>
            )
        );
    }
    return rating;
};

const ProductOverview = (props) => {
    if (_.isEmpty(props)) return null;
    return (
        <div className="product-layout col-md-12">
            <div className="product-grid col-md-6 col-xs-12">
                <div className="product-block product-thumb">
                    <div className="image">
                        <a href="/">
                            <img
                                src={props.thumbnail.href}
                                title={props.name}
                                alt={props.name}
                                className="img-responsive reg-image"
                            />
                        </a>
                        <div className="rating">
                            {!!props.reviews && props.reviews.reviewCount
                                ? starRating(props.reviews.reviewCount, 5)
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-grid col-md-6 col-xs-12">
                <div className="product-details">
                    <div className="caption">
                        <h4>
                            <a href="/">Product Name</a>
                        </h4>
                        <div className="price">
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
    );
};

ProductOverview.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    links: PropTypes.object,
    price: PropTypes.object,
    thumbnail: PropTypes.object,
    hero: PropTypes.object,
    images: PropTypes.array,
    reviews: PropTypes.object,
};

export default ProductOverview;
