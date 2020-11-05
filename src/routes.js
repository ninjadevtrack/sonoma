import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Detail from 'pages/Detail';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProductList from 'pages/ProductList';

import { Container } from 'components/common';

const Routes = () => {
    return (
        <Container className="py-5">
            <Header />
            <Switch>
                <Route path="/" component={ProductList} exact />
                <Route path="/user/:ccNumber" component={Detail} exact />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
            <Footer />
        </Container>
    );
};

export default Routes;
