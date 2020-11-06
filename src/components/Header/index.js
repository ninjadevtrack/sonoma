import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <nav id="top">
            <div
                className="container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div className="content_headercms_top pull-left">
                    <div className="header-logo">
                        <div id="logo">
                            <Link to="/">
                                <img
                                    width="50px"
                                    src="logo192.png"
                                    title="William Sonoma"
                                    alt="logo"
                                    className="img-responsive"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="header-links">
                        <ul className="static_links">
                            <li className="head-links">
                                <a href="#">Special</a>
                            </li>
                            <li className="head-links">
                                <a href="#">Affiliate</a>
                            </li>
                            <li className="head-links">
                                {' '}
                                <a href="#">Blog</a>
                            </li>
                            <li className="head-links">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="top-links" className="nav pull-right">
                    <ul
                        className="list-inline"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <li className="pull-left">
                            <a href="/">
                                <i className="fa fa-phone"></i>
                            </a>{' '}
                            <span className="hidden-xs hidden-sm hidden-md">
                                0807348785784
                            </span>
                        </li>
                        <li>
                            <a href="/" id="wishlist-total" title="wishlist">
                                <i className="fa fa-heart"></i>{' '}
                                <span className="hidden-xs hidden-sm hidden-md">
                                    Wishlist (0)
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/" title="checkout">
                                <i className="fa fa-share"></i>{' '}
                                <span className="hidden-xs hidden-sm hidden-md">
                                    Checkout
                                </span>
                            </a>
                        </li>
                        <li className="cart pull-right">
                            <div className="dropdown myaccount">
                                <a
                                    href="{{ account }}"
                                    title="{{ text_account }}"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <span className="accountimage"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right myaccount-menu">
                                    <li>
                                        <a href="#">Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Transactions</a>
                                    </li>
                                    <li>
                                        <a href="#">Downloads</a>
                                    </li>
                                    <li>
                                        <a href="#">Logout</a>
                                    </li>

                                    <li>
                                        <a href="#">Register</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;
