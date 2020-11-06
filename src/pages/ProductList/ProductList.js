import React from 'react';
import PropTypes from 'prop-types';
import HOC from 'components/HOC';

import ProductItem from './ProductItem';
import ProductOverview from './ProductOverview';

const ProductList = (props) => {
    const currentProduct = !!props.products ? props.products[0] : {};
    return (
        <div id="product-category" className="container">
            <ul className="breadcrumb">
                <li>
                    <a href="/home">Home</a>
                </li>
                <span>/</span>
                <li>Product</li>
            </ul>
            <div className="clearfix"></div>
            <div className="search_bar">
                <div id="search" className="input-group" style={{ width: '50%' }}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Products..."
                        className="form-control input-lg"
                    />
                    <span className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-default btn-lg search-button"
                        >
                            Search
                        </button>
                    </span>
                </div>
            </div>
            <div className="row">
                <ProductOverview {...currentProduct} />
            </div>
            <div className="row">
                <div id="content" className="col-md-12">
                    <div className="category_filter">
                        <div className="col-md-4 btn-list-grid">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    id="grid-view"
                                    className="btn btn-default grid"
                                    data-toggle="tooltip"
                                    title="{{ button_grid }}"
                                ></button>
                                <button
                                    type="button"
                                    id="list-view"
                                    className="btn btn-default list"
                                    data-toggle="tooltip"
                                    title="{{ button_list }}"
                                ></button>
                            </div>
                        </div>
                        <div className="compare-total">
                            <a href="/" id="compare-total">
                                {' '}
                                Product Compare (0)
                            </a>
                        </div>
                        <div className="pagination-right">
                            <div className="sort-by-wrapper">
                                <div className="col-md-6 text-right sort-by">
                                    <label
                                        className="control-label"
                                        htmlFor="input-sort"
                                    >
                                        <strong>Sort By</strong>
                                    </label>
                                </div>
                                <div className="col-md-6 text-right sort">
                                    <select id="input-sort" className="form-control">
                                        <option value="menu_order">
                                            Default sorting
                                        </option>
                                        <option value="popularity">
                                            Sort by popularity
                                        </option>
                                        <option value="rating">
                                            Sort by average rating
                                        </option>
                                        <option value="date">Sort by newness</option>
                                        <option value="price">
                                            Sort by price: low to high
                                        </option>
                                        <option value="price-desc">
                                            Sort by price: high to low
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="show-wrapper">
                                <div className="col-md-4 text-right show">
                                    <label
                                        className="control-label"
                                        htmlFor="input-limit"
                                    >
                                        <strong>Show</strong>
                                    </label>
                                </div>
                                <div className="col-md-6 text-right limit">
                                    <select
                                        id="input-limit"
                                        className="form-control"
                                    >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {props.products.map((product, i) => (
                            <ProductItem key={i} {...product} />
                        ))}
                    </div>
                    <div className="pagination-wrapper">
                        <div className="col-sm-6 text-left page-link">
                            Showing 1 to {props.products.length} of{' '}
                            {props.products.length} (1 Pages)
                        </div>
                        <div className="col-sm-6 text-right page-result">
                            {props.products.length} Results
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};

export default HOC(ProductList);
