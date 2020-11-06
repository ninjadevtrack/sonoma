import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProductList from 'pages/ProductList';

const Routes = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" component={ProductList} exact />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default Routes;
