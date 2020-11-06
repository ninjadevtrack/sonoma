import React, { useState, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import ReactModal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MODAL_STYLE = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,
        backgroundColor: 'rgba(220, 220, 220, 0.4)',
    },
    content: {
        height: 500,
        width: 500,
        margin: '100px auto',
    },
};

const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    fontSize: '24px',
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

const ProductOverview = (props) => {
    const [showModal, setShowModal] = useState(false);
    if (_.isEmpty(props)) return null;
    return (
        <div className="product-layout col-md-12" style={{ marginTop: '2rem' }}>
            <div className="product-grid col-md-6 col-xs-12">
                <div className="product-block product-thumb">
                    <div className="image" style={{ width: '100%' }}>
                        <img
                            src={props.hero.href}
                            title={props.name}
                            alt={props.name}
                            width={props.hero.width * 1.2}
                            height={props.hero.height}
                            className="img-responsive reg-image"
                            onClick={() => setShowModal(true)}
                        />
                    </div>
                </div>
                <ul>
                    {!!props.images &&
                        props.images.map((image, index) => {
                            return (
                                <li
                                    key={'image_' + index}
                                    style={{ width: '70px', margin: '5px' }}
                                >
                                    <div className="image" style={{ width: '100%' }}>
                                        <a href="/">
                                            <img
                                                src={image.href}
                                                title={props.name}
                                                alt={props.name}
                                                width="70"
                                                height="70"
                                                className="img-responsive reg-image"
                                            />
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="product-grid col-md-6 col-xs-12">
                <div className="product-details">
                    <div className="caption">
                        <h2>{props.name}</h2>
                        <h3 className="price">
                            {props.price ? (
                                <span className="price-new">
                                    ${props.price.selling}
                                </span>
                            ) : (
                                ''
                            )}
                            {props.priceRange ? (
                                <span className="price-new">
                                    ${props.priceRange.selling.low} - $
                                    {props.priceRange.selling.high}
                                </span>
                            ) : (
                                ''
                            )}
                        </h3>
                        <h4 style={{ color: 'red' }}>
                            Up to 30% off + free shipping on orders $79+ with code
                            SAVENOW
                        </h4>
                        <h5>
                            Please select color<span>Belgian Chambray</span>
                        </h5>
                        <div
                            className="image"
                            style={{ width: '60px', height: '60px' }}
                        >
                            <div className="product-block-inner" width="58">
                                <img
                                    src={props.thumbnail.href}
                                    title={props.name}
                                    alt={props.name}
                                    className="img-responsive reg-image"
                                />
                            </div>
                        </div>
                        <div className="subset-qty">
                            <label className="qty-legacy-ie">quantity</label>
                            <div className="quantity-input__container">
                                <div
                                    className="decrease-count"
                                    data-for-sku="skuQuantity_primaryGroup_0_0"
                                    aria-hidden="true"
                                >
                                    -
                                </div>
                                <input
                                    id="skuQuantity_primaryGroup_0_0"
                                    className="quantity-input qty resetDataAddToCart"
                                    aria-label="Quantity"
                                    type="number"
                                    pattern="[0-9]*"
                                    min="0"
                                    max="99"
                                    maxLength="2"
                                    placeholder="0"
                                    data-addtocart='{"sku":"3203763","groupId":"doctors-without-borders-face-coverings-set-of-2-d9946","catalog":"71","persistentProductId":"","intlIneligibility":false}'
                                />
                                <div
                                    className="increase-count"
                                    data-for-sku="skuQuantity_primaryGroup_0_0"
                                    aria-hidden="true"
                                >
                                    +
                                </div>
                            </div>
                            <p className="pip-sku">SKU: 3203763</p>
                        </div>
                    </div>
                </div>
                <div className="product-block">
                    <div className="button-group">
                        <button type="button" className="addtocart">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={showModal}
                contentLabel={'PodoModal'}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setShowModal(false)}
                style={MODAL_STYLE}
            >
                <div className="modal-body">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        swipeable
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <LeftCircleOutlined
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{ ...arrowStyles, left: 0 }}
                                />
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <RightCircleOutlined
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{ ...arrowStyles, right: 0 }}
                                />
                            )
                        }
                    >
                        {!!props.images &&
                            props.images.map((image, index) => {
                                return (
                                    <div key={'image_' + index}>
                                        <img
                                            src={image.href}
                                            title={props.name}
                                            alt={props.name}
                                            width="70"
                                            height="70"
                                            className="img-responsive reg-image"
                                        />
                                    </div>
                                );
                            })}
                    </Carousel>
                </div>
            </ReactModal>
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
