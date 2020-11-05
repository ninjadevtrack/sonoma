import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Users from 'pages/Users';
import Detail from "pages/Detail";
import ProductList from "pages/ProductList";

import { Container } from "components/common";

const Routes = () => {
	return (
		<Container className="py-5">
			<Switch>
				<Route path="/" component={ProductList} exact />
				<Route path="/user/:ccNumber" component={Detail} exact />
				<Route component={() => <Redirect to="/" />} />
			</Switch>
		</Container>
	);
};

export default Routes;
